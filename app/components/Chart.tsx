import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];
  const options = {
    chart: {
      type: "polarArea",
      foreColor: "oklch(var(--bc))",
    },
    stroke: {
      colors: ["transparent"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 w-full h-full">
      <div id="chart">
        <ReactApexChart
          options={{
            ...options,
            chart: { ...options.chart, type: "polarArea" },
          }}
          series={series}
          type="polarArea"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
