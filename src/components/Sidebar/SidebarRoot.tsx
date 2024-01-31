interface SidebarProps {
  children?: React.ReactNode;
}

export default function SidebarRoot({ children }: SidebarProps) {
  return (
    <div className="w-1/3 h-auto flex flex-col justify-between bg-neutral-800 px-2.5 py-4 my-3.5  rounded-lg lg:w-1/4">
      {children}
    </div>
  );
}
