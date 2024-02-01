interface CardNavProps {
  title: string;
  type: string;
  totalTracks?: number;
  author: string;
  img: string;
}

export default function CardNav({
  title,
  type,
  totalTracks,
  author,
  img,
}: CardNavProps) {
  return (
    <button className="hover:shadow-md w-full hover:shadow-zinc-900 h-16 bg-zinc-900 rounded-lg flex flex-row gap-4  hover:bg-zinc-800 transition-all duration-300 p-2">
      <div className="w-12 h-12 rounded-lg">
        <img src={img} alt={title} className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col justify-center h-full">
        <h3 className="text-base font-bold text-zinc-50 text-left">{title}</h3>
        <p className="text-xs font-normal text-zinc-300 text-left text-ellipsis overflow-hidden whitespace-nowrap ">
          {type} • {author} {totalTracks && `• ${totalTracks} músicas`}
        </p>
      </div>
    </button>
  );
}
