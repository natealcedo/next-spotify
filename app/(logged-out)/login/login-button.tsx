"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export function LoginButton() {
  return (
    <div>
      <Button onClick={() => signIn("spotify", {})}>Login with Spotify</Button>
    </div>
  );
}
