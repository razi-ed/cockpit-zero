import { ILogEvent } from "@dashboard/dashboard.definitions";

export const getGroupedLogEventsHistogramEntries = (logEvents: ILogEvent[]) => {
  const dateCountMap = new Map();

  logEvents.forEach((logEvent) => {
    const dateObj = new Date(logEvent.utcPreciseDatetime);
    const month = dateObj.getUTCMonth() + 1;
    const dayDate = dateObj.getUTCDate();
    const utcDate = `${dateObj.getUTCFullYear()}-${
      month < 10 ? "0" + month.toString() : month.toString()
    }-${dayDate < 10 ? "0" + dayDate.toString() : dayDate.toString()}`;

    const currentCount = dateCountMap.get(utcDate) || 0;
    dateCountMap.set(utcDate, currentCount + 1);
  });
  const logEventsHistogramEntries = Array.from(dateCountMap.entries()).map(
    ([date, logCount]) => ({
      shortDate: new Date(date).toLocaleDateString("en-UK", {
        month: "short",
        day: "numeric",
      }),
      logCount,
      longDate: new Date(date).toLocaleDateString("en-UK", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    })
  );
  return logEventsHistogramEntries;
};
