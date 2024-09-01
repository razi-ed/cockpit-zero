import type {
  IExportLogsServiceRequest,
  IResourceLogs,
  ILogRecord,
  IInstrumentationScope,
} from "@opentelemetry/otlp-transformer";

export type { IExportLogsServiceRequest, IResourceLogs, ILogRecord };

export interface ILogEvent extends ILogRecord {
  utcPreciseDatetime: string;
  id: string;
}

export interface IGroupedLogEventHistogramEntry {
  shortDate: string;
  logCount: number;
  longDate: string;
}
