import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { AnimatedWords } from "../ui/animated-words";

export function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mt-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">Experience the Backend</p>
            <AnimatedWords text="PostPipe" className="font-headline text-6xl md:text-8xl font-bold tracking-tighter" />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} PostPipe Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Github className="size-5" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Twitter className="size-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
