import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const ContainerScroll = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px", ...props.style }}
      {...props}>
      {children}
    </div>
  );
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef((
  {
    index,
    baseTop = 120,
    incrementY = 24,
    incrementZ = 10,
    children,
    className,
    style,
    ...props
  },
  ref
) => {
  const y = baseTop + (index * incrementY)
  const z = index * incrementZ

  return (
    <motion.div
      ref={ref}
      layout="position"
      style={{
        position: 'sticky',
        top: `${y}px`,
        z,
        backfaceVisibility: "hidden",
        ...style,
      }}
      className={className}
      {...props}>
      {children}
    </motion.div>
  );
})

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }
