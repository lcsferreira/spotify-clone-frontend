import { useEffect, useState } from "react";
import RecentCard from "../../components/RecentCard/RecentCard";
import { getRecent } from "../../api/api";
import { userModel } from "../../api/models/userModel";
import { recentlyPlayedModel } from "../../api/models/recentlyPlayedModel";
import { get } from "http";

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

  const [recentlyPlayed, setRecentlyPlayed] = useState<
    Array<recentlyPlayedModel>
  >([]);

  const user: userModel = {
    id: "1",
    name: "John Doe",
    email: "email@email.com",
  };

  const fecthData = async () => {
    try {
      getRecent(user).then((data: Array<recentlyPlayedModel>) => {
        setRecentlyPlayed(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div className="flex flex-col h-full mt-8">
      <h2 className="text-3xl font-bold text-zinc-50">{timeOfDayText}</h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-3 py-5">
        {recentlyPlayed?.map((item: recentlyPlayedModel, index: any) => (
          <RecentCard key={index} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
}
