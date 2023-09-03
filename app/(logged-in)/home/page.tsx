import { TopPlaylists, TopPlayListsLoading } from "@/app/(logged-in)/home/top-playlists";
import { Suspense } from "react";
import { Navbar } from "@/components/ui/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Home() {
  return (
    <>
      <Navbar className="bg-red-500" />
      <ScrollArea className=" h-[calc(100vh-180px)] flex-grow bg-[#121212]">
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
          <Suspense fallback={<TopPlayListsLoading />}>
            <TopPlaylists />
          </Suspense>
        </div>
      </ScrollArea>
    </>
  );
}
