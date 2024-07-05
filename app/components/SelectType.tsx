import React from "react";

interface SelectTypeProps {
  value: string;
  setValue: (value: string) => void;
}

export default function SelectType({ value, setValue }: SelectTypeProps) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="flex gap-2">
        <select
          className="select w-full"
          value={value}
          onChange={handleSelectChange}
        >
          <option disabled value="" className="text-info font-bold">
            Pick your use type
          </option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={() => setValue("")} className="btn btn-info">
          Clear Filter
        </button>
      </div>
    </>
  );
}
