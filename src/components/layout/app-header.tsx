import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { AuthButton } from "./auth-button";

const navLinks = [
  { href: "/dashboard/forms", label: "Forms" },
  { href: "/dashboard/workflows", label: "Workflows" },
  { href: "#pricing", label: "Pricing" },
  { href: "#docs", label: "Docs" },
];

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="size-6" />
          <span className="hidden font-bold font-headline sm:inline-block">
            PostPipe Pro
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
            <AuthButton />
        </div>
      </div>
    </header>
  );
}
