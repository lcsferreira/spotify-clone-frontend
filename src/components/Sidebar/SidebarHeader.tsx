import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faMagnifyingGlass);

export default function SidebarHeader() {
  return (
    <div className="w-full h-auto flex flex-col bg-zinc-900 px-2.5 py-4 rounded-lg gap-3">
      <a
        href=""
        className="flex flex-row gap-2 ml-3 text-zinc-300 hover:text-zinc-50 transition-all"
      >
        <span>
          <FontAwesomeIcon icon="home" />
        </span>
        <span className="ml-2">Início</span>
      </a>
      <a
        href=""
        className="flex flex-row gap-2 ml-3 text-zinc-300 hover:text-zinc-50 transition-all"
      >
        <span>
          <FontAwesomeIcon icon="magnifying-glass" />
        </span>
        <span className="ml-2">Buscar</span>
      </a>
    </div>
  );
}
