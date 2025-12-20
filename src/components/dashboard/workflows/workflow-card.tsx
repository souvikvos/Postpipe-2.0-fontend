import type { WorkflowTemplate } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, Terminal } from "lucide-react";
import { AIPromptDialog } from "./ai-prompt-dialog";

type WorkflowCardProps = {
  template: WorkflowTemplate;
};

export function WorkflowCard({ template }: WorkflowCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-lg">{template.title}</CardTitle>
        <CardDescription className="line-clamp-2 h-10">
          {template.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-3 gap-2">
        <Button variant="outline" size="sm" className="w-full">
          <Terminal />
          <span className="ml-2 hidden md:inline">CLI</span>
        </Button>
        <AIPromptDialog template={template} />
        <Button variant="outline" size="sm" className="w-full">
          <Bookmark />
          <span className="ml-2 hidden md:inline">Save</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
