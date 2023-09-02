import Link from "next/link";
import { Library, LibraryLoading } from "@/components/ui/library";
import { Suspense } from "react";
import { HomeIcon } from "@/components/icons/home-icon";
import { SearchIcon } from "@/components/icons/search-icon";

export function Sidenav() {
  return (
    <nav className="sidebar flex h-full flex-col gap-2 bg-black text-white" id="sidenav">
      <div className="flex flex-col gap-6 rounded-md bg-[#121212] p-6">
        <Link href="/home" className="flex gap-4">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link href="/search" className="flex gap-4">
          <SearchIcon />
          <span>Search</span>
        </Link>
      </div>
      <Suspense fallback={<LibraryLoading />}>
        <Library />
      </Suspense>
    </nav>
  );
}
