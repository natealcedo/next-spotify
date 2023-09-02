import { Skeleton } from "@/components/ui/skeleton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/auth-options";
import { getUsersTopPlaylists, PlayList } from "@/lib/spotify";
import Image from "next/image";
import { cn } from "@/lib/utils";

export async function TopPlaylists() {
  const session = await getServerSession(authOptions);
  const data = await getUsersTopPlaylists(session.accessToken);
  return (
    <div>
      <h1 className="mb-4 text-3xl font-semibold">Good afternoon</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.items.map((i) => (
          <TopPlayList key={i.id} playlist={i} />
        ))}
      </div>
    </div>
  );
}

function TopPlayList(props: { playlist: PlayList }) {
  const url = props.playlist.images[0]?.url;
  return (
    url && (
      <div
        className={cn(
          "w-full flex  gap-2 rounded-md overflow-hidden  border border-transparent " +
            "duration-500 bg-white/10 transition-colors  ease-in-out hover:cursor-pointer hover:bg-white/20"
        )}
      >
        <Image src={url} height={80} width={80} className="h-[80px] w-[80px] object-cover" alt="" />
        <div className="flex flex-grow items-center justify-start">{props.playlist.name}</div>
      </div>
    )
  );
}

export function TopPlayListsLoading() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-semibold">Good afternoon</h1>
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  );
}
