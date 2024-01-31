import { Navigation, Sidebar } from "../components";
import MainContent from "../components/MainContent/MainContent";

export default function Main() {
  return (
    <div className="w-screen h-screen bg-zinc-950 flex flex-row justify-evenly lg:justify-center lg:gap-4">
      <Sidebar.Root>
        <Sidebar.Header />
        <Sidebar.Content />
      </Sidebar.Root>
      <MainContent />
    </div>
  );
}
