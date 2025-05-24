import React from "react";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

const OPTIONS: Option[] = [
  { label: "Jitomate", value: "jitomate" },
  { label: "Lechuga", value: "lechuga" },
  { label: "Cebolla", value: "cebolla" },
  { label: "Mostaza", value: "mostaza" },
  { label: "Catsup", value: "catsup" },
];

interface MultipleSelectorDemoProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const MultipleSelectorDemo: React.FC<MultipleSelectorDemoProps> = ({
  value,
  onChange,
}) => {
  const selectedOptions: Option[] = OPTIONS.filter((option) =>
    value.includes(option.value)
  );

  const handleChange = (selectedOptions: Option[]) => {
    const selectedValues = selectedOptions.map((opt) => opt.value);
    onChange(selectedValues);
  };
  return (
    <div className="w-full px-10 text-black">
      <MultipleSelector
        value={selectedOptions}
        onChange={handleChange}
        defaultOptions={OPTIONS}
        placeholder="Selecciona los ingredientes"
        emptyIndicator={
          <p className="text-center text-lg leading-10 ">no results found.</p>
        }
      />
    </div>
  );
};

export default MultipleSelectorDemo;
