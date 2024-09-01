import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LogEventTable } from "../_components/log-event-table";
import { ILogEvent } from "@dashboard/dashboard.definitions";
import {
  mockTableDataWithAttributes,
  mockTableDataWithoutAttributes,
} from "../__mocks__/logEventTableData";

describe("LogEventTable", () => {
  it("renders table data with attributes", () => {
    render(<LogEventTable tableData={mockTableDataWithAttributes} />);

    // Check that the table renders the severity, time, and body
    expect(screen.getByText("ERROR")).toBeInTheDocument();
    expect(
      screen.getByText("Tue, 30 Jan 2024 23:55:18 GMT")
    ).toBeInTheDocument();
    expect(screen.getByText("back up primary card")).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByText("back up primary card"));
    });

    // Check if attributes are rendered in the subcomponent
    expect(screen.getByText("deliverables")).toBeInTheDocument();
    expect(screen.getByText("transmitter")).toBeInTheDocument();
    expect(screen.getByText("nodejs")).toBeInTheDocument();
  });

  it("renders table data without attributes", () => {
    render(<LogEventTable tableData={mockTableDataWithoutAttributes} />);

    // Check that the table renders the severity, time, and body
    expect(screen.getByText("back up credit card")).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByText("back up credit card"));
    });

    // Check that the subcomponent renders the empty attributes message
    expect(screen.getByText("Log Event Attributes Empty")).toBeInTheDocument();
    expect(
      screen.getByText("No attributes were found for the log event")
    ).toBeInTheDocument();
  });

  it("displays the empty message when no log events are provided", () => {
    render(<LogEventTable tableData={[]} />);

    // Check that the empty message is displayed
    expect(screen.getByText("No log events were found.")).toBeInTheDocument();
  });
});
