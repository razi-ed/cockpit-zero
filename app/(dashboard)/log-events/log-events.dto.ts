import "server-only";

import { ILogEvent } from "@dashboard/dashboard.definitions";
import { IExportLogsServiceRequest } from "@opentelemetry/otlp-transformer";
import {
  getDateObjectFromUnixNanoTime,
  getMD5,
} from "@shared/lib/server-utils";

export const getLogEventsDTO = (
  exportedLogs: IExportLogsServiceRequest
): ILogEvent[] => {
  const { resourceLogs = [] } = exportedLogs;
  let data: ILogEvent[] = [];

  data = resourceLogs.reduce((acc, resourceLog) => {
    const { scopeLogs = [], resource } = resourceLog;
    const resourceAttributes = resource?.attributes ?? [];

    /** stepping into `scope` list */
    scopeLogs.forEach((scopeLog) => {
      const { logRecords = [], scope } = scopeLog;
      const scopeAttributes = scope?.attributes ?? [];

      /** stepping into `log-event` list */
      const list: ILogEvent[] = logRecords.map((logRecord) => {
        const logEventAttributes = logRecord.attributes;
        const dateObj = getDateObjectFromUnixNanoTime(
          `${logRecord.timeUnixNano}`
        );
        const utcPreciseDatetime = new Intl.DateTimeFormat("en-DE", {
          dateStyle: "full",
          timeStyle: "long",
        }).format(dateObj);
        const id = getMD5(
          utcPreciseDatetime,
          logRecord.severityText || "",
          logRecord.body?.stringValue || ""
        );

        /** transforming into `log-events-table-row` */
        return {
          ...logRecord,
          id,
          utcPreciseDatetime,
          attributes: [
            ...resourceAttributes,
            ...scopeAttributes,
            ...logEventAttributes,
          ],
        };
      });
      acc = [...acc, ...list];
    });
    return acc;
  }, data);

  /** sorting `ASC` by `timeUnixNano` */
  const sortableList = Array.from(data);
  sortableList.sort(
    (a, b) => Number(a["timeUnixNano"]) - Number(b["timeUnixNano"])
  );
  return sortableList;
};
