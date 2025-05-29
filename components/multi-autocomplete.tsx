import React from "react";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

interface MultipleSelectorDemoProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: Option[]; 
}

const MultipleSelectorDemo: React.FC<MultipleSelectorDemoProps> = ({
  value,
  onChange,
  options,
}) => {
  const selectedOptions: Option[] = options.filter((option) =>
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
        defaultOptions={options}
        placeholder="Selecciona los ingredientes"
        emptyIndicator={
          <p className="text-center text-lg leading-10 ">no results found.</p>
        }
      />
    </div>
  );
};

export default MultipleSelectorDemo;
