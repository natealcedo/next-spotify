import { getTop } from "@/lib/spotify";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/auth-options";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export async function Library() {
  const session = await getServerSession(authOptions);
  const data = await getTop(session.accessToken, "artists");
  console.log(session.accessToken);
  return (
    <div className="bg-[#121212] p-2 pr-1 rounded-md flex flex-col gap-4 h-full">
      <h2 className="shadow-md">Your Library</h2>
      <ScrollArea className="gap-2 flex-grow h-0">
        <ul className="flex flex-col gap-2 ">
          {data.items?.map((item: any) => (
            <div
              key={item.id}
              className="flex items-start gap-4 hover:bg-[#b3b3b3]/10 transition-colors ease-in-out p-2 border-transparent rounded-md hover:cursor-pointer duration-200"
            >
              <Image
                src={item.images[0].url}
                alt=""
                height="64"
                width="64"
                className="rounded-md object-cover h-[64px] w-[64px]"
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
    <div className="bg-[#121212] p-2 pr-1 rounded-md flex flex-col gap-4 h-full">
      <h2 className="shadow-md">Your Library</h2>
      <ScrollArea className="gap-2 flex-grow h-0">
        <ul className="flex flex-col gap-4">
          {[1, 1, 1, 1, 1, 1].map((_, id) => (
            <div
              key={id}
              className="flex items-start gap-2 hover:bg-[#b3b3b3]/10 transition-colors ease-in-out px-1 py-2 border-transparent rounded-md hover:cursor-pointer duration-200"
            >
              <Skeleton className="rounded-md w-[64px] h-[64px] shrink-0" />
              <div className="flex flex-col gap-2 w-full mt-2">
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
