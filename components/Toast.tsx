import React from "react";

interface ToastProps {
  message: string;
  isError?: boolean;
  onClose: () => void;
}

export default function Toast({ message, isError = false, onClose }: ToastProps) {
  return (
    <div
      className={`fixed top-5 right-5 max-w-xs w-full rounded shadow-lg p-4 text-white flex items-center justify-between
      ${isError ? "bg-red-600" : "bg-green-600"} transition-opacity duration-300`}
      role="alert"
    >
      <div>{message}</div>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
        aria-label="Cerrar"
      >
        ✕
      </button>
    </div>
  );
}
