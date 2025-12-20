"use client";

import React, { createContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const AUTH_COOKIE_NAME = "postpipe_auth";

type User = {
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const cookie = document.cookie.split('; ').find(row => row.startsWith(`${AUTH_COOKIE_NAME}=`));
      if (cookie) {
        const email = cookie.split('=')[1];
        setUser({ name: "Demo User", email: decodeURIComponent(email) });
      } else {
        setUser(null);
      }
      setLoading(false);
    };
    checkAuth();
  }, [pathname]);

  const login = (email: string) => {
    document.cookie = `${AUTH_COOKIE_NAME}=${encodeURIComponent(email)}; path=/; max-age=86400`; // 1 day
    const newUser = { name: "Demo User", email };
    setUser(newUser);
    router.push("/dashboard/workflows");
  };

  const logout = () => {
    document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=-1`;
    setUser(null);
    router.push("/login");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
