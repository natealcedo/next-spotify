import Link from "next/link";
import { Library, LibraryLoading } from "@/components/ui/library";
import { Suspense } from "react";

export function Sidenav() {
  return (
    <nav className="sidebar flex h-full flex-col gap-2 bg-black text-white" id="sidenav">
      <div className="flex flex-col gap-6 rounded-md bg-[#121212] p-6">
        <Link href="/home">Home</Link>
        <Link href="/search">Search</Link>
      </div>
      <Suspense fallback={<LibraryLoading />}>
        <Library />
      </Suspense>
    </nav>
  );
}
