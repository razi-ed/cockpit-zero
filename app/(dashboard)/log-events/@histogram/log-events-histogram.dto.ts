import {
  IGroupedLogEventHistogramEntry,
  ILogEvent,
} from "@dashboard/dashboard.definitions";
import { getDateObjectFromUnixNanoTime } from "@shared/lib/server-utils";

export const getGroupedLogEventsHistogramEntries = (
  logEvents: ILogEvent[]
): IGroupedLogEventHistogramEntry[] => {
  const dateCountMap = new Map();

  logEvents.forEach((logEvent) => {
    const dateObj = getDateObjectFromUnixNanoTime(`${logEvent.timeUnixNano}`);
    const month = dateObj.getUTCMonth() + 1;
    const dayDate = dateObj.getUTCDate();
    const utcDate = `${dateObj.getUTCFullYear()}-${
      month < 10 ? "0" + month.toString() : month.toString()
    }-${dayDate < 10 ? "0" + dayDate.toString() : dayDate.toString()}`;

    const currentDateEntry = dateCountMap.get(utcDate) || {};
    // currentDateEntry["total"] = (currentDateEntry["total"] || 0) + 1;
    currentDateEntry[`${logEvent.severityText}`] =
      (currentDateEntry["logEvent.severityText"] || 0) + 1;

    dateCountMap.set(utcDate, currentDateEntry);
  });
  const logEventsHistogramEntries = Array.from(dateCountMap.entries()).map(
    ([date, map]) => ({
      shortDate: new Date(date).toLocaleDateString("en-DE", {
        month: "short",
        day: "numeric",
      }),
      ...map,
      longDate: new Intl.DateTimeFormat("en-DE", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(new Date(date)),
    })
  );
  return logEventsHistogramEntries;
};
