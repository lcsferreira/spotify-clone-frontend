import { Route, Routes } from "react-router-dom";
import Main from "./app/pages/main";
import { Navigation, Sidebar } from "./components";
import News from "./app/pages/news";
import Artist from "./app/pages/artist";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-zinc-950 flex flex-row justify-evenly lg:justify-center lg:gap-4">
        <Sidebar.Root>
          <Sidebar.Header />
          <Sidebar.Content />
        </Sidebar.Root>
        <div className="w-3/5 h-auto flex flex-col justify-between bg-zinc-800 px-2.5 py-4 my-3.5  rounded-lg lg:w-[70%]">
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/artists" element={<Artist />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
