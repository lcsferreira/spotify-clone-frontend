import { useNavigate } from "react-router-dom";

interface RecentCardProps {
  title: string;
  img: string;
  type: string;
  id: string;
}

export default function RecentCard({ title, img, type, id }: RecentCardProps) {
  const navigate = useNavigate();

  const handleClickCard = (type: string, id: string) => {
    // console.log(`Clicked on ${type} with id ${id}`);
    if (type === "podcast") {
      navigate(`/podcast/${id}`);
    } else if (type === "playlist") {
      navigate(`/playlist/${id}`);
    } else {
      return;
    }
  };

  return (
    <button
      className="flex overflow-hidden rounded shadow-md shadow-zinc-900 text-zinc-50 flex-start h-11 gap-6 place-items-center bg-zinc-800/35 hover:bg-zinc-800 transition-all duration-300 hover:cursor-pointer"
      onClick={() => {
        handleClickCard(type, id);
      }}
    >
      <img src={img} alt={title} className="max-w-14" />
      <h3 className="font-semibold text-sm">{title}</h3>
    </button>
  );
}
