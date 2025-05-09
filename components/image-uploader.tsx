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
    <div className="flex flex-col items-center justify-center gap-2 bg-background border rounded-md py-6">
      <label htmlFor="imageUpload" className="cursor-pointer">
        <Image
          src="/icons/upload-image-icon.svg"
          alt="Upload"
          width={100}
          height={100}
        />
      </label>

      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden" 
      />
      {preview && (
        <div className="mt-2">
          <img
            src={preview}
            alt="Vista previa"
            className="w-32 h-32 object-cover rounded border"
          />
        </div>
      )}
    </div>
  );
}
