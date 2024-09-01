import { LogEventsHistogram } from "./_components/log-events-histogram";
import { getGroupedLogEventsHistogramEntries } from "./log-events-histogram.dto";
import { getLogEvents } from "../log-events.data";

export default async function LogsPage() {
  const logEvents = await getLogEvents();
  const histogramData = getGroupedLogEventsHistogramEntries(logEvents);

  return <LogEventsHistogram histogramData={histogramData} />;
}
