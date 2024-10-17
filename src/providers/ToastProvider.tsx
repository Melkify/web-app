import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext({});

type Toast = {
  id: number;
  message: string;
  type: "info" | "success" | "error";
};
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type = "info") => {
    setToasts((prevToasts: Toast[]) => [
      ...prevToasts,
      {
        id: new Date().getTime(),
        message,
        type: type as Toast["type"],
      },
    ]);
  };

  const hideToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
