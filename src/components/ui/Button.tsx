export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const _props = {
    ...props,
    className: `inline-flex items-center justify-center whitespace-nowrap rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring  focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 ${props.className}`,
  };
  return <button {..._props}>{children}</button>;
};

export default Button;
