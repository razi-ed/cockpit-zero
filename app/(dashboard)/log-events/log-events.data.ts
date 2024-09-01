import { cache } from "react";
import "server-only";

import { IExportLogsServiceRequest } from "@opentelemetry/otlp-transformer";
import { dataServiceBaseUrl } from "@shared/lib/constants";
import { getLogEventsDTO } from "./log-events.dto";

export const getLogEvents = cache(async () => {
  try {
    const url = `${dataServiceBaseUrl}/logs`;
    const response = await fetch(url);
    const rawData: IExportLogsServiceRequest = await response.json();
    const logEvents = getLogEventsDTO(rawData);
    return logEvents;
  } catch (err) {
    console.error(err);
    return [];
  }
});
