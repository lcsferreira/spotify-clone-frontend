import { Navigation, Sidebar } from "../components";
import MainContent from "../components/MainContent/MainContent";

export default function Main() {
  return (
    <div className="w-screen h-screen bg-neutral-950 flex flex-row justify-around lg:justify-center lg:gap-4">
      <Sidebar.Root>
        <Sidebar.Content />
        <Sidebar.Header />
      </Sidebar.Root>
      <MainContent />
    </div>
  );
}
