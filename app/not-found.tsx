import Link from "next/link";

import { Button } from "@components/atoms/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <p>Awesome Log Monitoring Dashboard for Seamless Observability.</p>
      <Link href="/log-events">
        <Button>Go to Dashboard</Button>
      </Link>
    </main>
  );
}
