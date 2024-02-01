import { useEffect } from "react";
import RecentCard from "../../components/RecentCard/RecentCard";

export default function Main() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDayText = "";
  if (hours < 12) {
    timeOfDayText = "Bom dia";
  } else if (hours >= 12 && hours < 17) {
    timeOfDayText = "Boa tarde";
  } else {
    timeOfDayText = "Boa noite";
  }

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-full mt-8">
      <h2 className="text-3xl font-bold text-zinc-50">{timeOfDayText}</h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-3 py-5">
        <RecentCard title="Playlist 1" img="https://via.placeholder.com/150" />
        <RecentCard title="Playlist 1" img="https://via.placeholder.com/150" />
        <RecentCard title="Playlist 1" img="https://via.placeholder.com/150" />
        <RecentCard title="Playlist 1" img="https://via.placeholder.com/150" />
      </div>
    </div>
  );
}
