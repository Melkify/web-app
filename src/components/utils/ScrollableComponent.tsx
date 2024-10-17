import React from "react";

const ScrollableComponent = ({ children }: any) => {
  return <div className="h-[4/5] overflow-y-auto">{children}</div>;
};

export default ScrollableComponent;
