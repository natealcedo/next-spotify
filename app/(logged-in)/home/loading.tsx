import { Skeleton } from "@/components/ui/skeleton";
import { Navbar } from "@/components/ui/navbar";

export default function Loading() {
  return (
    <div className="bg-[#121212] px-2">
      <Navbar />
      <div className="flex h-[calc(100vh-180px)] flex-grow flex-col gap-4">
        <div>
          <h1 className="mb-4 text-3xl font-semibold">Good morning</h1>
          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-3xl font-semibold">Shows</h1>
          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-3xl font-semibold">Made for you</h1>
          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
