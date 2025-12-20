"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy, Sparkles } from "lucide-react";
import type { WorkflowTemplate } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

type AIPromptDialogProps = {
  template: WorkflowTemplate;
};

export function AIPromptDialog({ template }: AIPromptDialogProps) {
  const { toast } = useToast();
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(template.aiPrompt);
      setHasCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "The AI prompt has been copied successfully.",
      });
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Copy failed",
        description: "Could not copy the prompt to your clipboard.",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full">
          <Sparkles />
          <span className="ml-2 hidden md:inline">AI Prompt</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline">
            Generate with Agentic AI
          </DialogTitle>
          <DialogDescription>
            Copy this prompt and use it with your favorite AI tool to generate a
            frontend for this workflow.
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <pre className="mt-2 w-full overflow-x-auto rounded-md bg-muted p-4 font-code text-sm">
            <code>{template.aiPrompt}</code>
          </pre>
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-2"
            onClick={copyToClipboard}
          >
            {hasCopied ? <Check className="text-green-500" /> : <Copy />}
            <span className="sr-only">Copy</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
