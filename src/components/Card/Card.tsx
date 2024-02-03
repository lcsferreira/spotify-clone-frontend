import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  type: string;
  author: string;
  img: string;
}

export default function Card({ title, author, img, type, id }: CardProps) {
  const navigate = useNavigate();

  const handleClickCard = (type: string, id: string) => {
    console.log(`Clicked on ${type} with id ${id}`);
    if (type === "Podcast") {
      navigate(`/podcast/${id}`);
    } else if (type === "Playlist") {
      navigate(`/playlist/${id}`);
    } else {
      return;
    }
  };

  return (
    <button
      className="bg-zinc-800/35 p-8 shadow-md w-full shadow-zinc-900 rounded-md flex flex-col justify-evenly gap-4 place-items-center hover:bg-zinc-800 transition ease-linear duration-300"
      onClick={() => {
        handleClickCard(type, id);
      }}
    >
      <img
        src={img}
        alt={title}
        className="w-full rounded-md shadow-lg shadow-zinc-950"
      />
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
