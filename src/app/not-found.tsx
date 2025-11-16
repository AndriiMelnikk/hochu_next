import NotFound from "@/pages/NotFound";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <NotFound />
        <div className="mt-6">
          <Link href="/">
            <Button>Повернутися на головну</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

