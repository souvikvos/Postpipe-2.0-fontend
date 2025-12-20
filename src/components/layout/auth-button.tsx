"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";

export function AuthButton() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Skeleton className="h-10 w-24" />;
  }

  return isAuthenticated ? (
    <Button asChild className="bg-accent hover:bg-accent/90">
      <Link href="/dashboard/workflows">
        Dashboard <ArrowRight className="ml-2" />
      </Link>
    </Button>
  ) : (
    <Button asChild variant="outline">
      <Link href="/login">Login</Link>
    </Button>
  );
}
