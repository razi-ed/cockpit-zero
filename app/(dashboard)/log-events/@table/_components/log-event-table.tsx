"use client";

/* ***package imports***  */
import { Fragment, type ReactNode, useCallback, useMemo } from "react";
import { type ColumnDef } from "@tanstack/react-table";

/* ***components imports***  */
import {
  DataTable,
  TRenderSubComponent,
} from "@components/organisms/data-table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@components/molecules/card";

/* ***libs, utils, custom-hooks imports***  */

/* ***configs imports***  */

/* ***enums, consts imports***  */

/* ***types imports***  */
import { type ILogEvent } from "@dashboard/dashboard.definitions";

/* ***local declarations***  */
interface ILogEventTableProps {
  tableData: ILogEvent[];
}

const renderAttribute = (key: string, value: string) => (
  <Fragment key={`${key}:${value}-container`}>
    <dt className="m-0 py-2 px-3 border-b border-r border-l border-input">
      {key}
    </dt>
    <dd className="col-start-2 m-0 py-2 px-3 border-b border-r border-input">
      {value}
    </dd>
  </Fragment>
);

const renderAttributesList = (attributes: ILogEvent["attributes"]) => {
  if (!attributes || attributes.length === 0) {
    return [];
  }
  return attributes.map(({ key, value }) => {
    const attribute = renderAttribute(key, `${value.stringValue || "-"}`);
    return attribute;
  });
};

export function LogEventTable({ tableData }: ILogEventTableProps) {
  /* ***props decustructions***  */

  /* ***data selectors***  */

  /* ***hooks initializations***  */

  /* ***state initializations***  */

  /* ***side effects definitions***  */

  /* ***memoised functions initializations***  */

  const renderAttributes: TRenderSubComponent<ILogEvent> = useCallback(
    ({ row }) => {
      const { attributes } = tableData[row.index];
      let attributesListTitle = "Log Event Attributes";
      let attributesListContent: ReactNode;
      let attributesList: Array<ReactNode> = renderAttributesList(attributes);
      if (attributesList.length === 0) {
        attributesListTitle = "Log Event Attributes Empty";
        attributesListContent = "No attributes were found for the log event";
      } else {
        attributesListContent = (
          <dl className="grid grid-cols-[max-content_max-content] m-0 [&_dt:first-child]:border-t [&_dd:first-child]:border-t">
            <dt className="m-0 py-2 px-3 border border-input font-medium text-muted-foreground">
              Attribute Key
            </dt>
            <dd className="col-start-2 m-0 py-2 px-3 border-t border-r border-b border-input font-medium text-muted-foreground">
              Attribute Value
            </dd>
            {attributesList}
          </dl>
        );
      }
      return (
        <Card className="w-fit border-none shadow-none">
          <CardHeader className="pb-0">
            <CardTitle>{attributesListTitle}</CardTitle>
          </CardHeader>
          <CardContent className="px-2 sm:p-6">
            {attributesListContent}
          </CardContent>
        </Card>
      );
    },
    [tableData]
  );

  /* ***memoised variables initializations***  */
  const columns: ColumnDef<ILogEvent>[] = useMemo(
    () => [
      {
        accessorKey: "severityText",
        header: "Severity",
      },
      {
        accessorKey: "utcPreciseDatetime",
        header: "Time",
      },
      {
        accessorKey: "body.stringValue",
        header: "Body",
      },
    ],
    []
  );

  /* ***internal declarations, if necessary,***  */

  /* ***conditional renderings***  */

  return (
    <DataTable
      columns={columns}
      data={tableData}
      renderSubComponent={renderAttributes}
      emptyMessage={"No log events were found."}
      getRowId={(row) => row.id}
    />
  );
}
