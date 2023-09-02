import Link from "next/link";
import { Logout } from "@/app/(logged-in)/login";
import { Library } from "@/components/ui/library";

export function Sidenav() {
  return (
    <nav className="col-span-[72px] row-span-[1fr] bg-black h-full flex flex-col p-2 text-white gap-2">
      <div className="rounded-md bg-[#121212] flex flex-col gap-6 p-6">
        <Link href="/home">Home</Link>
        <Link href="/search">Search</Link>
        <Logout />
      </div>
      <Library />
    </nav>
  );
}
