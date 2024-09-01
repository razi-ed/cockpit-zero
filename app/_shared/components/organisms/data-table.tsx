"use client";

import { Fragment, useState } from "react";
import {
  ColumnDef,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  Row,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/molecules/table";

export type TRenderSubComponent<TData> = (props: {
  row: Row<TData>;
}) => React.ReactElement;

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  getRowId?: (
    originalRow: TData,
    index: number,
    parent?: Row<TData> | undefined
  ) => string;
  renderSubComponent?: TRenderSubComponent<TData>;
  initialExpanded?: ExpandedState;
  emptyMessage?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  getRowId,
  renderSubComponent,
  initialExpanded = {},
  emptyMessage = "No data found.",
}: DataTableProps<TData, TValue>) {
  const [expanded, setExpanded] = useState<ExpandedState>(initialExpanded);
  const table = useReactTable({
    onExpandedChange: setExpanded,
    state: {
      expanded,
    },
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowId,
    getRowCanExpand: () => true,
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              const toggleExpandedHandler = row.getToggleExpandedHandler();
              const canExpand = row.getCanExpand();
              const isExpanded = row.getIsExpanded();
              return (
                <Fragment key={`${row.id}-wrap`}>
                  <TableRow
                    data-state={row.getIsSelected() && "selected"}
                    className={`cursor-pointer ${
                      isExpanded ? "bg-muted/100" : "hover:bg-muted/50"
                    }`}
                    onClick={toggleExpandedHandler}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  {canExpand && isExpanded && (
                    <TableRow
                      data-state={row.getIsSelected() && "selected"}
                      className="bg-muted/100 hover:bg-muted/100"
                    >
                      <TableCell colSpan={row.getVisibleCells().length}>
                        {isExpanded &&
                          renderSubComponent &&
                          renderSubComponent({ row })}
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
