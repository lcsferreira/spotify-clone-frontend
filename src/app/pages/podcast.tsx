import { useParams } from "react-router-dom";
import { getPodcast } from "../../api/api";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { podcastModel } from "../../api/models/podcastModel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

export default function Podcast() {
  const [podcast, setPodcast] = useState(undefined as podcastModel | undefined);
  let latestEpisode = podcast?.episodes[podcast?.episodes.length - 1];
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
  // display the podcast data

  const formatDuration = (duration: string | undefined) => {
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
        <div className="bg-zinc-400/20 rounded py-4 px-3 flex flex-col gap-2">
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
            <p>
              <span>{formatDuration(latestEpisode?.releaseDate)}</span>
              <span>{latestEpisode?.duration}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-base">Sobre</h2>
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
    </div>
  );
}
