import React from "react";
import { Outlet } from "react-router-dom";

const DefautlLayout = () => {
  return (
    <div>
      DefautlLayout
      <Outlet />
    </div>
  );
};

export default DefautlLayout;
