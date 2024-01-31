import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBook, faPlus, faArrowRight);

export default function SidebarContent() {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-zinc-800 px-2.5 py-4 rounded-lg">
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
    </div>
  );
}
