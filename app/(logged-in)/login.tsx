"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export function Logout() {
  return (
    <Button onClick={() => signOut()} className="w-full">
      Logout
    </Button>
  );
}
