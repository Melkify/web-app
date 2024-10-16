import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="rtl flex min-h-screen items-center justify-center bg-[#F9F9F9] text-[#2576F1]">
      <div className="text-center">
        <h1 className="text-6xl font-bold">۴۰۴</h1>
        <p className="mb-4 text-xl">صفحه مورد‌نظر یافت نشد.</p>
        <Link to="/" className="btn btn-warning w-56">
          رفتن به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
