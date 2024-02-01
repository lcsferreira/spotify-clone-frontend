interface CardProps {
  title: string;
  author: string;
  img: string;
}

export default function Card({ title, author, img }: CardProps) {
  return (
    <button className="bg-zinc-800/35 p-8 shadow-md w-full shadow-zinc-900 rounded-md flex flex-col justify-evenly gap-4 place-items-center hover:bg-zinc-800 transition-all duration-300">
      <img src={img} alt={title} className="w-full rounded-md" />
      <div className="text-zinc-50 w-full">
        <h3 className="font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h3>
        <h3 className="font-semibold text-sm text-left text-ellipsis overflow-hidden whitespace-nowrap">
          {author}
        </h3>
      </div>
    </button>
  );
}
