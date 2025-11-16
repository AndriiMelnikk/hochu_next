import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { ToastContainer } from "react-toastify";
import { TooltipProvider } from "@shared/ui/tooltip";
import { Toaster } from "@shared/ui/toaster";
import { Toaster as Sonner } from "@shared/ui/sonner";
import { AuthProvider } from "@entities/auth";
import { router } from "@app/router/router";
import { setupMockInterceptor } from "@shared/api";
import { api } from "@shared/api/api";
import "@app/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

// Setup mock API interceptor
setupMockInterceptor(api);

// Create QueryClient with caching configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      retry: 1,
    },
  },
});

const App = () => {
  const locale = localStorage.getItem("locale") || "uk";

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Dynamic import of translations
        if (locale === "uk") {
          const { messages } = await import("@locales/uk/messages");
          i18n.load("uk", messages);
          i18n.activate("uk");
        } else {
          const { messages } = await import("@locales/en/messages");
          i18n.load("en", messages);
          i18n.activate("en");
        }
      } catch (error) {
        console.error("Failed to load translations:", error);
        // Fallback to Ukrainian
        i18n.activate("uk");
      }
    };

    loadTranslations();
  }, [locale]);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider i18n={i18n}>
        <AuthProvider>
          <TooltipProvider>
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
            <RouterProvider router={router} />
          </TooltipProvider>
        </AuthProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
};

export default App;

