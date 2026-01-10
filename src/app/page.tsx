import { Shield, User } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl font-headline mb-4">
          Welcome to <span className="text-primary">TaskPilot</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl mb-12">
          Your new hub for seamless task management. Select your role to get
          started.
        </p>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <Link href="/admin" className="group">
            <Card className="h-full transform-gpu transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:border-primary">
              <CardHeader className="p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold font-headline">
                  Admin
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-lg">
                  Oversee projects, manage your team, and view analytics.
                </CardDescription>
                <Button
                  variant="link"
                  className="mt-4 p-0 h-auto text-lg text-primary"
                  aria-label="Go to Admin Dashboard"
                >
                  Go to Dashboard &rarr;
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/staff" className="group">
            <Card className="h-full transform-gpu transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:border-accent">
              <CardHeader className="p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <User className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-3xl font-bold font-headline">
                  Staff
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-lg">
                  Access your assigned tasks and update your progress.
                </CardDescription>
                <Button
                  variant="link"
                  className="mt-4 p-0 h-auto text-lg text-accent"
                  aria-label="View My Tasks"
                >
                  View My Tasks &rarr;
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
