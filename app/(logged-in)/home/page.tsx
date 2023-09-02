import { TopPlaylists, TopPlayListsLoading } from "@/app/(logged-in)/home/top-playlists";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex h-full w-full flex-col gap-8 px-4">
      <Suspense fallback={<TopPlayListsLoading />}>
        <TopPlaylists />
      </Suspense>
      <div> Shows</div>
      <div> Made For you</div>
    </div>
  );
}
