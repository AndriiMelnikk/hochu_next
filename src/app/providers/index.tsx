"use client";

import { ReactNode, useEffect } from "react";
import { ContextProvider } from "./ContextProvider";
import { QueryProvider } from "./QueryProvider";
import { LinguiProvider } from "./LinguiProvider";
import { AuthProvider } from "@entities/auth";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setupMockInterceptor } from "@/shared/api";
import { api } from "@/shared/api/api";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  useEffect(() => {
    // Setup mock API interceptor (тільки на клієнті)
    setupMockInterceptor(api);
  }, []);

  return (
    <QueryProvider>
      <LinguiProvider>
        <AuthProvider>
          <ContextProvider>
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </TooltipProvider>
          </ContextProvider>
        </AuthProvider>
      </LinguiProvider>
    </QueryProvider>
  );
};

