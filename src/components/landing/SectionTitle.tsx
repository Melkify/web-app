const SectionTitle = (props: {
  pretitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`mt-4 m-8 flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <div className="text-sm font-bold uppercase tracking-wider text-cyan-600">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
          {props.title}
        </h2>
      )}

      {props.children}
    </div>
  );
};

export default SectionTitle;
