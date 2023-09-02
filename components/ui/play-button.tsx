"use client";

import { Button } from "@/components/ui/button";
import { Triangle } from "@/components/ui/triangle";
import { cn } from "@/lib/utils";

export function PlayButton() {
  return (
    <Button
      onClick={() => alert("click")}
      tabIndex={0}
      className={cn(
        "absolute right-4 h-12 w-12 rounded-full p-3 text-white opacity-0 " +
          "transition-all duration-200 ease-in-out hover:scale-105 group-hover:opacity-100 group-focus:opacity-100 focus:opacity-100"
      )}
    >
      <Triangle />
    </Button>
  );
}
