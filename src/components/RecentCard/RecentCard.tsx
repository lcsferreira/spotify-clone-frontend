interface RecentCardProps {
  title: string;
  img: string;
}

export default function RecentCard({ title, img }: RecentCardProps) {
  return (
    <div className="flex overflow-hidden rounded shadow-md shadow-zinc-950 text-zinc-50 flex-start h-11 gap-6 place-items-center bg-transparent">
      <img src={img} alt={title} className="max-w-14" />
      <h3 className="font-semibold text-sm">{title}</h3>
    </div>
  );
}
