import { Route, Routes } from "react-router-dom";
import Main from "./app/pages/main";
import { Navigation, Sidebar } from "./components";
import News from "./app/pages/news";
import Artist from "./app/pages/artist";
import Podcast from "./app/pages/podcast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-auto h-auto min-h-screen bg-zinc-950 flex flex-row justify-evenly lg:justify-center lg:gap-4">
        <Sidebar.Root>
          <Sidebar.Header />
          <Sidebar.Content />
        </Sidebar.Root>
        <div className="w-3/5 h-auto flex flex-col justify-between bg-zinc-900 px-6 py-4 my-3.5  rounded-lg lg:w-[70%]">
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news" element={<News />} />
            <Route path="/playlists" element={<h1>Playlists</h1>} />
            <Route path="/podcasts" element={<h1>Podcasts</h1>} />
            <Route path="/playlist/:id" element={<h1>Playlist</h1>} />
            <Route path="/podcast/:id" element={<Podcast />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/artists" element={<Artist />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
