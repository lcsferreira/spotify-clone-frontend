import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faAngleRight,
  faBell,
  faPeopleGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

library.add(faAngleLeft, faAngleRight, faBell, faPeopleGroup, faUser);

interface NavigationProps {
  isSearching?: boolean;
}

export function Navigation({ isSearching }: NavigationProps) {
  return (
    <nav className="w-full flex justify-between bg-neutral-800 px-2.5 py-4 my-3.5 h-20 fixed rounded-lg">
      <div className="w-24">
        <ul className="flex justify-around">
          <li>
            <Button>
              <FontAwesomeIcon icon="angle-left" />
            </Button>
          </li>
          <li>
            <Button>
              <FontAwesomeIcon icon="angle-right" />
            </Button>
          </li>
        </ul>
        {isSearching && <input type="text" placeholder="Search" />}
      </div>
      <div className="w-40">
        <ul className="flex justify-around text-slate-300">
          <li>
            <Button>
              <FontAwesomeIcon icon="bell" />
            </Button>
          </li>
          <li>
            <Button>
              <FontAwesomeIcon icon="people-group" />
            </Button>
          </li>
          <Button>
            <FontAwesomeIcon icon="user" />
          </Button>
        </ul>
      </div>
    </nav>
  );
}
