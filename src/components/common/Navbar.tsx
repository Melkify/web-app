import clsx from "clsx";
import { useState } from "react";
import Button from "../forms/Button";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navigation = ["بلاگ", "درخواست ربات", "خدمات"];
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-4 lg:justify-between xl:px-0">
        <div className="nav__item mr-3 hidden space-x-4 lg:flex">
          <Button
            variant="solid"
            color="cyan"
            className="min-w-20 p-2"
            href="/auth/login"
          >
            ورود
          </Button>
          {/* <DarkModeSwitcher /> */}
        </div>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((menu, index) => (
              <li className="nav__item mr-3" key={index}>
                <Link
                  to="/"
                  className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-cyan-500 focus:bg-cyan-100 focus:text-cyan-500 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" width={48} height={48} />
          </Link>
          <div className="">
            <button
              aria-label="Toggle Menu"
              className=" ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-cyan-500 focus:bg-cyan-100 focus:text-cyan-500 focus:outline-none dark:text-gray-300 lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {open && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!open && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={clsx([
              "my-5 flex w-full flex-wrap lg:hidden",
              open ? "block" : "hidden",
            ])}
          >
            <>
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  to="/"
                  className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-cyan-500 focus:bg-cyan-100 focus:text-cyan-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
                >
                  {item}
                </Link>
              ))}
              <Button
                variant="solid"
                color="cyan"
                className="w-full p-2"
                href="/auth/login"
              >
                ورود
              </Button>
            </>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
