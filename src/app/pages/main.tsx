import { useEffect, useState } from "react";
import RecentCard from "../../components/RecentCard/RecentCard";
import { getPodcasts, getRecent } from "../../api/api";
import { userModel } from "../../api/models/userModel";
import { recentlyPlayedModel } from "../../api/models/recentlyPlayedModel";
import { get } from "http";
import Card from "../../components/Card/Card";
import { podcastModel } from "../../api/models/podcastModel";

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

  const [podcasts, setPodcasts] = useState<Array<podcastModel>>([]);

  const user: userModel = {
    id: "1",
    name: "John Doe",
    email: "email@email.com",
  };

  const fecthRecentlyPlayed = async () => {
    try {
      getRecent(user).then((data: Array<recentlyPlayedModel>) => {
        setRecentlyPlayed(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fecthPodcasts = async () => {
    try {
      getPodcasts(user).then((data: Array<podcastModel>) => {
        setPodcasts(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthRecentlyPlayed();
    fecthPodcasts();
  }, []);

  return (
    <div className="flex flex-col h-full mt-8">
      <h2 className="text-3xl font-bold text-zinc-50">{timeOfDayText}</h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-3 py-5">
        {recentlyPlayed?.map((item: recentlyPlayedModel, index: any) => (
          <RecentCard key={index} title={item.title} img={item.img} />
        ))}
      </div>
      <h2 className="text-xl font-bold text-zinc-50 flex justify-between">
        Seus Programas{" "}
        <span>
          <a href="/podcasts" className="text-xs font-normal hover:underline">
            Mostrar tudo
          </a>
        </span>
      </h2>
      <div className="grid grid-cols-4 grid-rows-1 py-5 gap-4">
        {podcasts?.map((item: podcastModel, index: any) => (
          <Card
            key={index}
            title={item.title}
            img={item.img}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}
