import Link from "next/link";
import { Menu, Gauge } from "lucide-react";

import { Button } from "@components/atoms/button";

import { Sheet, SheetContent, SheetTrigger } from "@components/organisms/sheet";
import { ModeToggle } from "@components/organisms/mode-toggle";

import { appName } from "@shared/lib/constants";

interface IAppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout({ children }: IAppLayoutProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/log-events"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Gauge className="h-6 w-6" />
            <h1>{appName}</h1>
            <span className="sr-only">{appName}</span>
          </Link>
          <Link
            href="/log-events"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Gauge className="h-6 w-6" />
                <h1>{appName}</h1>
                <span className="sr-only">{appName}</span>
              </Link>
              <Link
                href="/log-events"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <ModeToggle />
        </div>
      </header>
      <main className="w-full h-[calc(100%-4rem)]">{children}</main>
    </div>
  );
}
