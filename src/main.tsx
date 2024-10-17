import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastProvider } from "./providers/ToastProvider";
import { Toast } from "./components/common";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <div className="flex h-full flex-col bg-[#EBEBEB]">
        <RouterProvider router={router} />
      </div>

      <Toast />
    </ToastProvider>
  </StrictMode>
);
