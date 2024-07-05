import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Chart = ({ data }: { data: any[] }) => {
  console.log("data", data);

  const mappedData = data.map((item: any, index: number) => ({
    id: item.id || index, // Use the item's id or index as a fallback
    value: item.amount,
    label: item.desc,
  }));

  return (
    <div className="grid grid-cols-1 w-full max-h-[50vh] my-auto">
      <PieChart
        series={[
          {
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 4,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 270,

            data: mappedData,
          },
        ]}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "top", horizontal: "right" },
            padding: 0,
            labelStyle: {
              fontSize: 14,
              fill: "oklch(var(--bc))",
            },
          },
        }}
        height={250}
      />
    </div>
  );
};

export default Chart;
