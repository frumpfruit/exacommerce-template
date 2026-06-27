const fs = require('fs');
const path = require('path');
const dir = 'src/templates/Roastery/components';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Add the new colors to the brand object
  if (content.includes('const brand = {') && !content.includes('onSurface:')) {
    content = content.replace(/const brand = \{([\s\S]*?)\};/, (match, inner) => {
      let newInner = inner;
      newInner += '\n  onSurface: "#001d32",\n  softMint: "#EDF8F8",\n  surface: "#f7f9ff",\n  primary: "#003759",';
      return 'const brand = {' + newInner + '};';
    });
    changed = true;
  }

  if (content.includes('brand.brown')) {
    content = content.replace(/brand\.brown/g, 'brand.onSurface');
    changed = true;
  }
  
  if (content.includes('brand.tan')) {
    content = content.replace(/brand\.tan/g, 'brand.softMint');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith('.jsx')) {
      processFile(filePath);
    }
  }
}

walk(dir);
