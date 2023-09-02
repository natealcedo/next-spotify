import { TopPlaylists, TopPlayListsLoading } from "@/app/(logged-in)/home/top-playlists";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
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
    </>
  );
}
