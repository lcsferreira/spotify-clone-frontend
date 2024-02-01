import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { trackModel } from "../../api/models/trackModel";
import { playlistModel } from "../../api/models/playlistModel";
import CardNav from "../CardNav/CardNav";
import { getCreatedPlaylists } from "../../api/api";

library.add(faBook, faPlus, faArrowRight);

export default function SidebarContent() {
  const [likedTracks, setLikedTracks] = useState<Array<trackModel>>([]);
  const [createdPlaylists, setCreatedPlaylists] = useState<
    Array<playlistModel>
  >([]);

  const user = {
    id: "1",
    name: "John Doe",
    email: "",
  };

  useEffect(() => {
    // fetchLikedTracks();
    fetchCreatedPlaylists();
  }, []);

  const fetchCreatedPlaylists = async () => {
    try {
      getCreatedPlaylists(user).then((data: Array<playlistModel>) => {
        setCreatedPlaylists(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-start gap-4 bg-zinc-900 px-2.5 py-4 rounded-lg">
      <div className="w-full flex flex-row justify-between">
        <button className="w-full flex flex-row gap-2 ml-3 text-zinc-300 hover:text-zinc-50 transition-all place-items-center">
          <span>
            <FontAwesomeIcon icon="book" />
          </span>
          <span className="ml-2">Sua Biblioteca</span>
        </button>
        <div className="flex flex-row gap-2 w-1/4 justify-around">
          <button className="w-8 h-8 text-zinc-300 hover:text-zinc-50 rounded-full hover:bg-zinc-950/75 transition-all">
            <span>
              <FontAwesomeIcon icon="plus" />
            </span>
          </button>
          <button className="w-8 h-8 text-zinc-300 hover:text-zinc-50 rounded-full hover:bg-zinc-950/75 transition-all">
            <span>
              <FontAwesomeIcon icon="arrow-right" />
            </span>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <CardNav
          title="Músicas curtidas"
          type="Playlist"
          author="Spotifake"
          totalTracks={6}
          img="https://via.placeholder.com/150"
        />
        {createdPlaylists?.map((item: playlistModel, index: any) => (
          <CardNav
            key={index}
            title={item.title}
            type="Playlist"
            author={item.author || "Spotifake"}
            totalTracks={item?.totalTracks}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
