import clsx from "clsx";

const Alert = ({
  message,
  buttonText,
  onClick,
  type = "warning",
}: {
  message: string;
  buttonText: string;
  onClick: () => void;
  type: "warning" | "error";
}) => {
  return (
    <div
      role="alert"
      className={clsx("alert m-1", {
        "alert-warning": type === "warning",
        "alert-error": type === "error",
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>{message}</span>
      <button className="btn" onClick={() => onClick()}>
        {buttonText}
      </button>
    </div>
  );
};

export default Alert;
