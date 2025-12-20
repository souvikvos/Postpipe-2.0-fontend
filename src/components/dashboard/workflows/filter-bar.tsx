"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const allTags = [
  'All',
  'AI',
  'Customer Support',
  'Email',
  'Marketing',
  'Content',
  'Collaboration',
  'E-commerce',
  'Automation'
];

export function FilterBar() {
    const [activeTag, setActiveTag] = useState('All');

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input placeholder="Search templates..." className="pl-10" />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {allTags.map((tag) => (
            <Button 
                key={tag} 
                variant={activeTag === tag ? "default" : "outline"}
                size="sm"
                className="shrink-0"
                onClick={() => setActiveTag(tag)}
            >
                {tag}
            </Button>
        ))}
      </div>
    </div>
  );
}
