import { useParams } from "react-router-dom";
import { getPodcast } from "../../api/api";
import { useEffect, useState } from "react";
import { podcastModel } from "../../api/models/podcastModel";

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

  return (
    <div className="flex flex-col h-full text-zinc-50">
      <div>
        <img src={podcast?.img} alt="Podcast Image" />
        <div>
          <h3>Podcast</h3>
          <h1>{podcast?.title}</h1>
          <h2>{podcast?.author}</h2>
        </div>
      </div>
      <div>
        <div>
          <p>Último Lançamento</p>
          <div>
            <h3>{latestEpisode?.title}</h3>
            <h2>{latestEpisode?.author}</h2>
            <p>{latestEpisode?.description}</p>
            <p>
              <span>{latestEpisode?.releaseDate}</span>
              <span>{latestEpisode?.duration}</span>
            </p>
          </div>
        </div>
        <h2>Sobre</h2>
        <p>{podcast?.description}</p>
        <div>
          <span>{podcast?.overallRating}</span>
          <span>{/* Start icon */}</span>
        </div>
      </div>
    </div>
  );
}
