import React from "react";

type Children = {
  children: React.ReactNode;
};
const Container = ({ children }: Children) => {
  return (
    <div className="container mx-auto max-w-7xl px-4 lg:px-8">{children}</div>
  );
};

export default Container;
