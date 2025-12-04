import { motion, MotionProps } from "motion/react";
import { ReactNode } from "react";

interface MotionDivFadeDownProps extends Omit<MotionProps, "initial" | "animate" | "transition"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  onClick?: () => void;
}

export const MotionDivFadeDown = ({
  children,
  delay = 0.1,
  duration = 0.5,
  className,
  onClick,
  ...motionProps
}: MotionDivFadeDownProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeInOut", delay }}
      className={className}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
