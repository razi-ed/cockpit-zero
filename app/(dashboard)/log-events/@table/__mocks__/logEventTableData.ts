import { ILogEvent } from "@dashboard/dashboard.definitions";

export const mockTableDataWithAttributes: ILogEvent[] = [
  {
    timeUnixNano: "1706658918722000000",
    observedTimeUnixNano: "1706658918722000000",
    severityNumber: 20,
    severityText: "ERROR",
    body: {
      stringValue: "back up primary card",
    },
    attributes: [
      {
        key: "service.namespace",
        value: {
          stringValue: "deliverables",
        },
      },
      {
        key: "service.name",
        value: {
          stringValue: "transmitter",
        },
      },
      {
        key: "service.version",
        value: {
          stringValue: "3.6.2",
        },
      },
      {
        key: "telemetry.sdk.name",
        value: {
          stringValue: "assignment",
        },
      },
      {
        key: "telemetry.sdk.language",
        value: {
          stringValue: "nodejs",
        },
      },
      {
        key: "telemetry.sdk.version",
        value: {
          stringValue: "1.0.0",
        },
      },
    ],
    droppedAttributesCount: 0,
    id: "5572129a7e183982b6777daf85783ad2",
    utcPreciseDatetime: "Tue, 30 Jan 2024 23:55:18 GMT",
  },
];
export const mockTableDataWithoutAttributes: ILogEvent[] = [
  {
    timeUnixNano: "1706658918722000000",
    observedTimeUnixNano: "1706658918722000000",
    severityNumber: 20,
    severityText: "ERROR",
    body: {
      stringValue: "back up credit card",
    },
    attributes: [],
    droppedAttributesCount: 0,
    id: "5572129a7e183982b6777daf85783ad2",
    utcPreciseDatetime: "Tue, 30 Jan 2024 23:55:18 GMT",
  },
];
