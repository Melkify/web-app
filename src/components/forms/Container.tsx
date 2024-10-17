import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}
const Container = ({ children, title }: Props) => {
  return (
    <div className="rounded-lg border border-stroke bg-white shadow-default">
      <div className=" px-7 py-4 ">
        <h3 className="text-lg font-bold text-black ">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default Container;
