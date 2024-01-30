interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="text-slate-300 hover:text-slate-50 rounded-full border-0 w-10 h-10 bg-neutral-950/75 transition-all hover:size-11 hover:text-xl"
      {...props}
    >
      {children}
    </button>
  );
}
