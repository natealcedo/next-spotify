import { getTop } from "@/lib/spotify";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/auth-options";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export async function Library() {
  const session = await getServerSession(authOptions);
  const data = await getTop(session.accessToken, "artists");
  return (
    <div className="flex h-full flex-col gap-4 rounded-md bg-[#121212] p-2 pr-1">
      <h2 className="shadow-md">Your Library</h2>
      <ScrollArea className="h-0 flex-grow gap-2">
        <ul className="flex flex-col gap-2 ">
          {data.items?.map((item: any) => (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-md border-transparent p-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-[#b3b3b3]/10"
            >
              <Image
                src={item.images[0].url}
                alt=""
                height="64"
                width="64"
                className="h-[64px] w-[64px] rounded-md object-cover"
              />
              <div className="flex flex-col gap-2">
                <div>{item.name}</div>
                <div>{item.type}</div>
              </div>
            </div>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}

export function LibraryLoading() {
  return (
    <div className="flex h-full flex-col gap-4 rounded-md bg-[#121212] p-2 pr-1">
      <h2 className="shadow-md">Your Library</h2>
      <ScrollArea className="h-0 flex-grow gap-2">
        <ul className="flex flex-col gap-4">
          {[1, 1, 1, 1, 1, 1].map((_, id) => (
            <div
              key={id}
              className="flex items-start gap-2 rounded-md border-transparent px-1 py-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-[#b3b3b3]/10"
            >
              <Skeleton className="h-[64px] w-[64px] shrink-0 rounded-md" />
              <div className="mt-2 flex w-full flex-col gap-2">
                <Skeleton className="h-2 w-3/4" />
                <Skeleton className="h-2 w-full" />
              </div>
            </div>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
