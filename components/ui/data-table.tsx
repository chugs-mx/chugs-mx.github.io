import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
  
  interface DataTableProps<TData> {
    columns: ColumnDef<TData, any>[];
    data: TData[];
  }

  export function DataTable<TData>({ columns, data }: DataTableProps<TData>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <div className="rounded-md border bg-[#fff3e6] shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-primary-foreground text-background">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead
                    key={header.id}
                    className="text-background font-bold text-xl text-center px-4 py-3"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
  
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow
                key={row.id}
                className={rowIndex % 2 === 0 ? "bg-[#ffe0cc]" : "bg-[#fff3e6]"}
              >
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id} className="text-center px-4 py-1 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }