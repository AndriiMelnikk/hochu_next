"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "inline" | "block" | "full-page";
  message?: string;
  icon?: React.ReactNode;
  HeaderComponent?: React.ComponentType;
  FooterComponent?: React.ComponentType;
}

const Error = React.forwardRef<HTMLDivElement, ErrorProps>(
  ({ className, variant = "block", message = "Помилка завантаження", icon, HeaderComponent, FooterComponent, ...props }, ref) => {
    const defaultIcon = <AlertCircle className="h-4 w-4" />;
    const displayIcon = icon !== undefined ? icon : defaultIcon;

    // Full page variant with Header/Footer
    if (variant === "full-page") {
      const ErrorContent = () => (
        <div className="flex flex-col items-center justify-center py-12">
          {displayIcon && <div className="mb-4 text-destructive">{displayIcon}</div>}
          <p className={cn("text-destructive", className)} {...props}>
            {message}
          </p>
        </div>
      );

      // If Header and Footer components are provided, use them directly
      if (HeaderComponent && FooterComponent) {
        return (
          <div className="min-h-screen">
            <HeaderComponent />
            <main className="pt-24 pb-12">
              <div className="container mx-auto px-4">
                <ErrorContent />
              </div>
            </main>
            <FooterComponent />
          </div>
        );
      }

      // Otherwise, use dynamic import
      const [Header, setHeader] = React.useState<React.ComponentType | null>(null);
      const [Footer, setFooter] = React.useState<React.ComponentType | null>(null);

      React.useEffect(() => {
        if (!Header) {
          import("@/widgets/app/Header").then((module) => setHeader(() => module.default));
        }
        if (!Footer) {
          import("@/widgets/app/Footer").then((module) => setFooter(() => module.default));
        }
      }, [Header, Footer]);

      if (!Header || !Footer) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <ErrorContent />
          </div>
        );
      }

      return (
        <div className="min-h-screen">
          <Header />
          <main className="pt-24 pb-12">
            <div className="container mx-auto px-4">
              <ErrorContent />
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    // Inline variant
    if (variant === "inline") {
      return (
        <span ref={ref} className={cn("text-destructive", className)} {...props}>
          {message}
        </span>
      );
    }

    // Block variant (default)
    return (
      <div
        ref={ref}
        className={cn("text-center py-12 flex flex-col items-center justify-center", className)}
        {...props}
      >
        {displayIcon && <div className="mb-4 text-destructive">{displayIcon}</div>}
        <p className="text-destructive">{message}</p>
      </div>
    );
  }
);

Error.displayName = "Error";

export { Error };

