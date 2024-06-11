import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

export default function Month() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <div className="my-auto border-b-2 border-primary bg-primary/10 w-fit">
        <DatePicker
          placeholder="Select month"
          onChange={onChange}
          picker="month"
          size="large"
          variant="borderless"
        />
      </div>
    </div>
  );
}
