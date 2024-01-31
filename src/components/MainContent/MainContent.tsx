import { Navigation } from "../Navigation";

export default function MainContent() {
  return (
    <div className="w-3/5 h-auto flex flex-col justify-between bg-zinc-800 px-2.5 py-4 my-3.5  rounded-lg lg:w-[70%]">
      <Navigation />
    </div>
  );
}
