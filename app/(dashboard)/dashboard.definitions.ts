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
  // severity: Record<ILogRecord["severityText"], number>;
  totalCount: number;
  UNSPECIFIED: number;
  TRACE: number;
  DEBUG: number;
  INFO: number;
  WARN: number;
  ERROR: number;
  FATAL: number;
}
