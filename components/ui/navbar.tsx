"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Logout } from "@/app/(logged-in)/login";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Navbar() {
  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/search") {
      document.getElementById("search")?.focus();
    }
  }, [pathName]);
  return (
    <div className="bg-blur flex w-full justify-between p-4">
      <div className="flex w-full justify-start gap-2">
        <span>left</span>
        <span>right</span>
        {pathName === "/search" ? <input id="search" type="text" className="text-black" /> : null}
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={20} side={"bottom"} className="mr-8 w-[250px] p-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Logout />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
