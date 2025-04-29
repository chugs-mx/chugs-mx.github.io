"use client";
import React from "react";

export function Pagination() {
    return (
        <div className="flex justify-between items-center p-4 bg-transparent">
            <div>
                <label className="mr-2 text-sm text-primary-foreground">Filas por página:</label>
                <select
                    className="border rounded-md px-2 py-1 text-sm text-primary-foreground border-primary-foreground">
                    {[3, 5, 10, 20].map(size => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>
            <button onClick={() => (console.log("primera"))} disabled={true}
                    className="px-3 py-2 text-primary-foreground disabled:opacity-50">
                ⏮ Primera
            </button>

            <button onClick={() => console.log("anterior")}
                    disabled={true}
                    className="px-3 py-2 text-primary-foreground disabled:opacity-50">
                Anterior
            </button>

            <span className="text-primary-foreground text-sm">
          Página {2} de {10}
        </span>

            <button onClick={() => console.log("siguiente")}
                    disabled={false}
                    className="px-3 py-2 text-primary-foreground disabled:opacity-50">
                Siguiente
            </button>

            <button onClick={() => console.log("ultima")} disabled={false}
                    className="px-3 py-2 text-primary-foreground disabled:opacity-50">
                Última ⏭
            </button>
        </div>
    )
}