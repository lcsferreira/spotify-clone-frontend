interface SidebarProps {
  children?: React.ReactNode;
}

export default function SidebarRoot({ children }: SidebarProps) {
  return (
    <div className="w-1/3 h-auto flex flex-col justify-between my-3.5 gap-4  rounded-lg lg:w-1/4">
      {children}
    </div>
  );
}
