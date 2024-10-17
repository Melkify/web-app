import React, { useEffect } from "react";
import clsx from "clsx";
import { useToast } from "../../providers/ToastProvider";

export interface Toast {
  id: number;
  message: string;
  type: string;
}
const Toast = () => {
  const { toasts, hideToast } = useToast();

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    toasts.forEach((toast: Toast) => {
      const timeoutId = setTimeout(() => {
        hideToast(toast.id);
      }, 3000); // Hide the toast after 3 seconds

      timeoutIds.push(timeoutId);
    });
    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [toasts, hideToast]);

  return (
    <div className="rtl fixed bottom-4 right-4 z-9999 flex flex-col">
      {toasts.map((toast: Toast) => (
        <div
          key={toast.id}
          className={clsx([
            toast.type === "success" ? "bg-green-500" : "bg-red-500",
            "mb-2 inline-flex rounded-md p-4  text-white",
          ])}
        >
          <p>{toast.message}</p>
          <button
            className="mr-4 focus:outline-none"
            onClick={() => hideToast(toast.id)}
          >
            &#10006;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
