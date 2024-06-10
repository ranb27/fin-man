import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

export default function Month() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <DatePicker onChange={onChange} picker="month" />
    </div>
  );
}
