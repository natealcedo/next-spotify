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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/search") {
      document.getElementById("search")?.focus();
    }
  }, [pathName]);
  return (
    <div className="sticky top-0 z-10 flex h-24 w-full justify-between px-2 py-4 ">
      <div className="flex w-full justify-start gap-2 backdrop-blur-md">
        <Button className="rounded-full">Back</Button>
        <Button className="rounded-full">Forward</Button>
        {pathName === "/search" ? (
          <Input
            type="text"
            className="w-[300px] rounded-full bg-black/20 placeholder:text-white"
            placeholder="What do you want to listen to?"
          />
        ) : null}
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
