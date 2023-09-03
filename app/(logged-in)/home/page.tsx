import { TopPlaylists, TopPlayListsLoading } from "@/app/(logged-in)/home/top-playlists";
import { Suspense } from "react";
import { Navbar } from "@/components/ui/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Home() {
  return (
    <>
      <Navbar className="bg-red-500" />
      <ScrollArea className="flex h-[calc(100vh-180px)] flex-grow flex-col gap-4 bg-[#121212]">
        <div>
          <div className="grid-col-1 grid gap-12 p-2">
            <Suspense fallback={<TopPlayListsLoading />}>
              <TopPlaylists />
            </Suspense>
          </div>
        </div>

        <div>
          <div className="grid-col-1 grid gap-12 p-2">
            <Suspense fallback={<TopPlayListsLoading />}>
              <TopPlaylists />
            </Suspense>
          </div>
        </div>

        <div>
          <div className="grid-col-1 grid gap-12 p-2">
            <Suspense fallback={<TopPlayListsLoading />}>
              <TopPlaylists />
            </Suspense>
          </div>
        </div>

        <div>
          <div className="grid-col-1 grid gap-12 p-2">
            <Suspense fallback={<TopPlayListsLoading />}>
              <TopPlaylists />
            </Suspense>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
