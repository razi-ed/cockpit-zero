export default function Layout({
  children,
  table,
  histogram,
}: {
  children: React.ReactNode;
  table: React.ReactNode;
  histogram: React.ReactNode;
}) {
  return (
    <section className="h-full">
      {children}
      <article className="mx-14 mt-1 mb-3">
        <h3 className="mb-1 text-sm">Log Events Histogram</h3>
        {histogram}
      </article>
      <article className="mx-14 pb-4 pt-2 h-[calc(100%-16rem)]">
        <h3 className="mb-1 text-sm">Log Event Table</h3>
        <main className="h-[calc(100%-1.5rem)]">{table}</main>
      </article>
    </section>
  );
}
