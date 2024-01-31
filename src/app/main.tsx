import { Navigation } from "../components";
import MainContent from "../components/MainContent/MainContent";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Main() {
  return (
    <div className="w-screen h-screen bg-neutral-950 flex flex-row justify-around lg:justify-center lg:gap-4">
      <Sidebar />
      <MainContent />
    </div>
  );
}
