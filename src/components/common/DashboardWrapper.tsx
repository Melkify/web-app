import clsx from "clsx";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PageWrapper = ({ children, className }: any) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div
      className={clsx(
        "flex h-fit w-full flex-col rounded-xl bg-slate-300 sm:rounded-3xl sm:pb-5 ",
        className,
      )}
    >
      <div
        className="btn btn-circle btn-ghost self-end text-lg normal-case"
        onClick={handleGoBack}
      >
        <MdArrowBackIosNew />
      </div>
      {children}
    </div>
  );
};

export default PageWrapper;
