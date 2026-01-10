import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold font-headline mb-4">
          Admin Dashboard
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page is under construction.
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back to Welcome Screen
          </Link>
        </Button>
      </div>
    </div>
  );
}
