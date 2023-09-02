import { TopPlaylists, TopPlayListsLoading } from "@/app/(logged-in)/home/top-playlists";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="grid-col-1 grid gap-12">
      <Suspense fallback={<TopPlayListsLoading />}>
        <TopPlaylists />
      </Suspense>
      <Suspense fallback={<TopPlayListsLoading />}>
        <TopPlaylists />
      </Suspense>
      <Suspense fallback={<TopPlayListsLoading />}>
        <TopPlaylists />
      </Suspense>
      <Suspense fallback={<TopPlayListsLoading />}>
        <TopPlaylists />
      </Suspense>
    </div>
  );
}
