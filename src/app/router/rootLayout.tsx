import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Завантаження...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

