import { useEffect, useState } from "react";
import RecentCard from "../../components/RecentCard/RecentCard";
import { getPlaylists, getPodcasts, getRecent } from "../../api/api";
import { userModel } from "../../api/models/userModel";
import { recentlyPlayedModel } from "../../api/models/recentlyPlayedModel";
import { get } from "http";
import Card from "../../components/Card/Card";
import { podcastModel } from "../../api/models/podcastModel";
import { playlistModel } from "../../api/models/playlistModel";

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

  const [playlists, setPlaylists] = useState<Array<playlistModel>>([]);

  const user: userModel = {
    id: "1",
    name: "John Doe",
    email: "email@email.com",
  };

  const fecthRecentlyPlayed = async () => {
    try {
      getRecent(user).then((data: Array<recentlyPlayedModel>) => {
        // console.log(data);
        setRecentlyPlayed(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fecthPodcasts = async () => {
    try {
      getPodcasts(user).then((data: Array<podcastModel>) => {
        // console.log(data);
        setPodcasts(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlaylists = async () => {
    try {
      getPlaylists(user).then((data: Array<playlistModel>) => {
        // console.log(data);
        setPlaylists(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthRecentlyPlayed();
    fecthPodcasts();
    fetchPlaylists();
  }, []);

  return (
    <div className="flex flex-col h-full">
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
            type="Podcast"
            id={item.id}
            title={item.title}
            img={item.img}
            author={item.author}
          />
        ))}
      </div>
      <h2 className="text-xl font-bold text-zinc-50 flex justify-between">
        O Melhor dos Artistas{" "}
        <span>
          <a href="/playlists" className="text-xs font-normal hover:underline">
            Mostrar tudo
          </a>
        </span>
      </h2>
      <div className="grid grid-cols-4 grid-rows-1 py-5 gap-4">
        {playlists?.map((item: playlistModel, index: any) => (
          <Card
            id={item.id}
            key={index}
            type="Playlist"
            title={item.title}
            img={item.img}
            author={item.artists}
          />
        ))}
      </div>
    </div>
  );
}
