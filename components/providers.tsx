"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { clerkConfigured } from "@/lib/clerk";

const CLERK_GREEN = {
  variables: {
    colorPrimary: "#0B665C",
    colorPrimaryForeground: "#ffffff",
  },
  elements: {
    formButtonPrimary:
      "bg-[#0B665C] hover:bg-[#094f48] focus:ring-[#0B665C] text-white",
    socialButtonsBlockButton: "border-[#0B665C] text-[#0B665C]",
  },
} as const;

export function AppProviders({ children }: { children: React.ReactNode }) {
  const pk = (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "").trim();
  if (!clerkConfigured() || !pk) return children;

  return (
    <ClerkProvider
      publishableKey={pk}
      signInUrl="/login"
      signUpUrl="/signup"
      signInFallbackRedirectUrl="/"
      signUpFallbackRedirectUrl="/"
      appearance={CLERK_GREEN}
    >
      {children}
    </ClerkProvider>
  );
}
