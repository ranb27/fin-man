import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

export default function PieChart() {
  useEffect(() => {
    const options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: "donut",
        width: "100%", // Make the chart responsive to its container
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

    const chart = new ApexCharts(document.getElementById("chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" className="h-full w-full" />;
}
