interface ILabelProps {
  id: string;
  children: React.ReactNode;
}
export default function Label({ id, children }: ILabelProps) {
  return (
    <label
      id={id}
      className=" mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-300 md:text-lg"
    >
      {children}
    </label>
  );
}
