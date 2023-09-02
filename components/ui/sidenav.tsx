import Link from "next/link";
import { Library, LibraryLoading } from "@/components/ui/library";
import { Suspense } from "react";

export function Sidenav() {
  return (
    <nav className="col-span-[72px] row-span-[1fr] bg-black h-full flex flex-col p-2 text-white gap-2">
      <div className="rounded-md bg-[#121212] flex flex-col gap-6 p-6">
        <Link href="/home">Home</Link>
        <Link href="/search">Search</Link>
      </div>
      <Suspense fallback={<LibraryLoading />}>
        <Library />
      </Suspense>
    </nav>
  );
}
