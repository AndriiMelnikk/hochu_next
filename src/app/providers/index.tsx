"use client";

import { ReactNode } from "react";
import { ContextProvider } from "./ContextProvider";
import { QueryProvider } from "./QueryProvider";
import { LinguiProvider } from "./LinguiProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <LinguiProvider>
        <ContextProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ContextProvider>
      </LinguiProvider>
    </QueryProvider>
  );
};

