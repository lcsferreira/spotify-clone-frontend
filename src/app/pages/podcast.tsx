import { useParams } from "react-router-dom";
import { getPodcast } from "../../api/api";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { podcastModel } from "../../api/models/podcastModel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { episodeModel } from "../../api/models/episodeModel";

library.add(faStar, faPlayCircle);

export default function Podcast() {
  const [podcast, setPodcast] = useState<podcastModel>();
  const [latestEpisode, setLatestEpisode] = useState<episodeModel>();
  // get the podcast id from the route
  const { id } = useParams();
  // fetch the podcast data
  const fecthPodcast = async () => {
    try {
      getPodcast(id as string).then((data: podcastModel) => {
        // console.log(data);
        setPodcast(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthPodcast();
  }, [id]);

  useEffect(() => {
    setLatestEpisode(podcast?.episodes[podcast?.episodes.length - 1]);
  }, [podcast]);
  // display the podcast data

  const formatDuration = (duration: string) => {
    //get the hours split to the first :
    const hours = duration?.split(":")[0];
    //get the minutes split to the second :
    const minutes = duration?.split(":")[1];
    //return the hours and minutes
    return `${hours}h ${minutes}min`;
  };

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    //return the date with the month and day only
    return dateObj.toLocaleDateString("pt-BR", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col h-full text-zinc-50 gap-4">
      <div className="flex flex-row">
        <img
          src={podcast?.img}
          alt="Podcast Image"
          className="h-full w-2/6 shadow-lg shadow-zinc-950 rounded-lg max-w-44"
        />
        <div className="flex flex-col gap-2 place-items-start justify-end ml-5">
          <h3 className="font-extralight text-xs">Podcast</h3>
          <h1 className="font-extrabold text-4xl">{podcast?.title}</h1>
          <h2 className="font-bold text-base">{podcast?.author}</h2>
        </div>
      </div>
      <div className="flex flex-row gap-4 max-md:flex-col-reverse">
        <div className="bg-zinc-400/20 rounded py-4 px-3 flex flex-col gap-2 w-3/5 max-md:w-full">
          <p className="font-light text-xs text-zinc-300/80">
            Último Lançamento
          </p>
          <div>
            <h3>{latestEpisode?.title}</h3>
            <h2 className="font-light text-xs text-zinc-300/80 mt-1">
              {latestEpisode?.author}
            </h2>
            <p className="font-light text-sm text-zinc-300/80 my-3">
              {latestEpisode?.description}
            </p>
            <p className="flex flex-row gap-2">
              <span>
                {latestEpisode
                  ? formatDate(latestEpisode.releaseDate)
                  : "Loading"}
              </span>
              -
              <span>
                {latestEpisode
                  ? formatDuration(latestEpisode.duration)
                  : "Loading"}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl">Sobre</h2>
          <p className="font-normal text-base text-zinc-300/80">
            {podcast?.description}
          </p>
          <div className="flex flex-row place-items-center gap-2 rounded-3xl bg-zinc-400/20 w-max px-2 py-1 text-sm">
            <span>{podcast?.overallRating}</span>
            <span>
              <FontAwesomeIcon icon="star" />
            </span>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xl">Todos os Episódios</h2>
      {podcast?.episodes
        .slice(0)
        .reverse()
        .map((episode: episodeModel, index: number) => (
          <div
            key={index}
            className="h-max flex flex-row gap-4 bg-transparent py-4 px-3 border-t-2 border-zinc-400/20 hover:bg-zinc-400/20 transition-all cursor-pointer hover:shadow-lg hover:border-none"
          >
            <img
              src={episode.img}
              alt="Episode Image"
              className="h-24 w-24 rounded-lg"
            />
            <div className="flex flex-col gap-2 w-full">
              <h3>{episode.title}</h3>
              <h2 className="font-light text-xs text-zinc-300/80 mt-1">
                {episode.author}
              </h2>
              <p className="font-light text-sm text-zinc-300/80 my-3">
                {episode.description}
              </p>
              <p className="flex flex-row gap-2">
                <span>{formatDate(episode.releaseDate)}</span>-
                <span>{formatDuration(episode.duration)}</span>
              </p>
              <button className="w-max self-end">
                <FontAwesomeIcon
                  icon="play-circle"
                  size="2xl"
                  className="hover:size-9 transition-all hover:shadow-lg hover:bg-zinc-400/20 rounded-full "
                />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
