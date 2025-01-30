"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ScrollArea } from "@/components/ui/scroll-area";
import { products } from "@/data/products"; // Import from the new file

export default function ProjectOverview() {
  return (
    <div className="overflow-hidden">
      <HeroParallax products={products} />
      <ScrollArea className="h-[100px] w-[100px] rounded-md border p-4">
        <h2 className="text-4xl mt-10 text-center">Featured</h2>
      </ScrollArea>
    </div>
  );
}
