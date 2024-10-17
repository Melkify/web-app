import { useState } from "react";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full px-4 py-4 text-left focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900">{title}</span>
          <span className="ml-4">
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="p-4">
          <p className="mt-4 text-sm text-slate-700">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
