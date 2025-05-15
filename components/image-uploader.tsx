"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";

export default function ImageUploader() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <label htmlFor="imageUpload" className="cursor-pointer">
      <div className="relative flex flex-col items-center justify-center gap-2 bg-background border rounded-md py-6">
        <Image
          src="/icons/upload-image-icon.svg"
          alt="Upload"
          width={100}
          height={100}
        />

        {preview && (
          <img
            src={preview}
            alt="Vista previa"
            className="absolute top-1/2 left-1/2 w-30 h-30 object-cover rounded border z-0 transform -translate-x-1/2 -translate-y-1/2 pb-1"
          />
        )}

        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        {preview && (
          <span className="text-primary-foreground text-sm font-medium mt-2">
            Imagen cargada correctamente
          </span>
        )}
      </div>
    </label>
  );
}
