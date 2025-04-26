'use client'

import React from "react";
import { useState } from "react"; 
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
    page: number;
    pageSize: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
  }


  export function DataTable<TData>({ 
    columns, 
    data,
    page,
    pageSize,
    pageCount,
    onPageChange,
    onPageSizeChange, 
    }: DataTableProps<TData>) {
    const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

     //const [page, setPage] = useState(1);
     //const [pageSize, setPageSize] = useState(3);
          
     //const pageCount = Math.ceil(inventories.length / pageSize);
     // const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

    const table = useReactTable({
      data: paginatedData,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <>
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
     

      <div className="flex justify-between items-center p-4 bg-transparent">
      <div>
        <label className="mr-2 text-sm text-primary-foreground">Filas por página:</label>
        <select
          value={pageSize}
          onChange={(e) => {
            onPageSizeChange(Number(e.target.value));
            onPageChange(1);
          }}
          className="border rounded-md px-2 py-1 text-sm text-primary-foreground border-primary-foreground">
          {[3, 5, 10, 20].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
        <button onClick={() => onPageChange(1)} disabled={page === 1}
          className="px-3 py-2 text-primary-foreground disabled:opacity-50">
          ⏮ Primera
        </button>

        <button onClick={() => onPageChange(Math.max(page - 1, 1))}
          disabled={page === 1}
          className="px-3 py-2 text-primary-foreground disabled:opacity-50">
          Anterior
        </button>

        <span className="text-primary-foreground text-sm">
          Página {page} de {pageCount}
        </span>

        <button onClick={() => onPageChange(Math.min(page + 1, pageCount))}
          disabled={page === pageCount}
          className="px-3 py-2 text-primary-foreground disabled:opacity-50">
          Siguiente
        </button>

        <button onClick={() => onPageChange(pageCount)} disabled={page === pageCount}
          className="px-3 py-2 text-primary-foreground disabled:opacity-50">
          Última ⏭
        </button>
      </div>
    </>
    );
  }