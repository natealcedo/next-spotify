import { TopPlaylists, TopPlayListsLoading } from "@/app/(logged-in)/home/top-playlists";
import { Suspense } from "react";

export default async function Playlists() {
  return (
    <div className="flex h-full w-full flex-col gap-8 px-4">
      <div className="bg-red-500">
        <h1>Playlist</h1>
      </div>
      <Suspense fallback={<TopPlayListsLoading />}>
        <TopPlaylists />
      </Suspense>
      <div> Shows</div>
      <div> Made For you</div>
    </div>
  );
}
