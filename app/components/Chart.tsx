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
        margin={{ top: 0, bottom: 100, left: 0, right: 0 }}
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
            direction: "row",
            position: { vertical: "bottom", horizontal: "right" },
            padding: 0,
            labelStyle: {
              fontSize: 10,
              fill: "oklch(var(--bc))",
            },
            itemMarkWidth: 20,
            itemMarkHeight: 2,
            markGap: 5,
            itemGap: 10,
          },
        }}
        height={300}
      />
    </div>
  );
};

export default Chart;
