import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Github, Twitter } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="size-6 text-primary" />
            <span className="font-bold font-headline">PostPipe Pro</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PostPipe Inc. All rights reserved.
          </p>
        </div>
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
    </footer>
  );
}
