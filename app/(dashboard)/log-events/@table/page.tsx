import { LogEventTable } from "./_components/log-event-table";

import { getLogEvents } from "../log-events.data";

export default async function LogsPage() {
  const data = await getLogEvents();

  return <LogEventTable tableData={data} />;
}
