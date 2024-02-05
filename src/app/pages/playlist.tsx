import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../../api/api";
import { useEffect, useState } from "react";
import { playlistModel } from "../../api/models/playlistModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faHeart,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faPlayCircle, faHeart, farHeart, faClock);

export default function Playlist() {
  const [playlist, setPlaylist] = useState<playlistModel>();
  const [totalDuration, setTotalDuration] = useState("0min");

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    //TODO: implement like functionality
  };

  const fetchPlaylist = async (id: string) => {
    try {
      getPlaylist(id).then((data: playlistModel) => {
        setPlaylist(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    calculateDuration();
  }, [playlist]);

  const calculateDuration = (): void => {
    let duration = 0;
    playlist?.tracks.forEach((track) => {
      const [minutes, seconds] = track.duration.split(":");
      duration += parseInt(minutes);
      duration += parseInt(seconds) / 60;
      // console.log(duration);
      // return a srting in hours and minutes if more than 60 minutes
    });
    if (duration >= 60) {
      const hours = Math.floor(duration / 60);
      const minutes = Math.floor(duration % 60);
      setTotalDuration(`${hours}h${minutes}min`);
    } else {
      setTotalDuration(`${duration}min`);
    }
  };

  const formatAddedAt = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const { id } = useParams();

  //the duration is a string in the format "HH:MM:SS"

  useQuery(["playlist", id || ""], () => fetchPlaylist(id || ""));

  return (
    <div className="flex flex-col h-full text-zinc-50 gap-4">
      <div className="flex flex-row">
        <img
          src={playlist?.img}
          alt="Podcast Image"
          className="h-full w-2/6 shadow-lg shadow-zinc-950 rounded-lg max-w-44"
        />
        <div className="flex flex-col gap-2 place-items-start justify-end ml-5">
          <h3 className="font-extralight text-xs">Playlist</h3>
          <h1 className="font-extrabold text-4xl">{playlist?.title}</h1>
          <h2 className="font-bold text-base">
            {playlist?.author}{" "}
            <span className="text-sm font-normal">
              - {playlist?.likes} curtidas
            </span>
            <span className="text-sm font-normal">
              {" "}
              - {playlist?.tracks.length} músicas
            </span>
            <span className="text-sm font-normal">
              , aproximadamente {totalDuration}
            </span>
          </h2>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <button className="flex flex-row gap-2 place-items-center text-sky-700">
          <FontAwesomeIcon
            icon="play-circle"
            size="4x"
            className="transition-all hover:shadow-lg hover:text-sky-500 hover:scale-110"
          />
        </button>
        <button
          className="flex flex-row gap-2 place-items-center text-sky-800"
          onClick={handleLike}
        >
          {isLiked ? (
            <FontAwesomeIcon
              icon="heart"
              size="2xl"
              className="transition-all hover:shadow-lg hover:text-sky-500 hover:scale-110"
            />
          ) : (
            <FontAwesomeIcon
              icon={farHeart}
              size="2xl"
              className="transition-all hover:shadow-lg hover:text-sky-500 hover:scale-110"
            />
          )}
        </button>
      </div>
      <table className="w-ful ">
        <thead className="border-b-2 border-zinc-300/30">
          <tr>
            <th className="px-4 py-4 text-zinc-300/80">#</th>
            <th className="px-4 py-4 text-zinc-300/80">Título</th>
            <th className="px-4 py-4 text-zinc-300/80">Álbum</th>
            <th className="px-4 py-4 text-zinc-300/80">Adicionado dia</th>
            <th className="px-4 py-4 text-zinc-300/80">
              <FontAwesomeIcon icon="clock" />
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {playlist?.tracks.map((track, index) => (
            <tr key={index} className="">
              <td className="px-4 py-4">{index + 1}</td>
              <td className="px-4 py-4">
                <div className="flex flex-row gap-3">
                  <img
                    src={track.img}
                    alt="Track Image"
                    className="h-12 w-12 rounded-lg"
                  />
                  <div>
                    <h3 className="font-normal text-left">{track.title}</h3>
                    <h4 className="font-light text-left text-zinc-300/80">
                      {track.artist}
                    </h4>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-zinc-300/80">{track.album}</td>
              <td className="px-4 py-4 text-zinc-300/80">
                {formatAddedAt(track.addedAt)}
              </td>
              <td className="px-4 py-4 text-zinc-300/80">{track.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
