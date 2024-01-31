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
import { useNavigate } from "react-router-dom";

library.add(faAngleLeft, faAngleRight, faBell, faPeopleGroup, faUser);

interface NavigationProps {
  isSearching?: boolean;
}

export function Navigation({ isSearching }: NavigationProps) {
  const navigate = useNavigate();

  const handleClickNews = () => {
    navigate("/news");
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleForwardButton = () => {
    navigate(1);
  };

  return (
    <nav className="w-full flex justify-between bg-transparent h-20rounded-lg">
      <div className="w-24">
        <ul className="flex justify-between">
          <li>
            <Button onClick={handleBackButton}>
              <FontAwesomeIcon icon="angle-left" />
            </Button>
          </li>
          <li>
            <Button onClick={handleForwardButton}>
              <FontAwesomeIcon icon="angle-right" />
            </Button>
          </li>
        </ul>
        {isSearching && <input type="text" placeholder="Search" />}
      </div>
      <div className="w-40">
        <ul className="flex justify-between text-zinc-300">
          <li>
            <Button onClick={handleClickNews}>
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
