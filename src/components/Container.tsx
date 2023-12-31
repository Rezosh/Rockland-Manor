import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("container mx-auto max-w-7xl px-4 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
