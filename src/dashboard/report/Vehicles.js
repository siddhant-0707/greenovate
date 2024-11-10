import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "axios";

function VehiclesPieChart({ year }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (year) {
      const options = {
        method: "GET",
        url: "http://localhost:5000/api/emission/details",
        params: { year: year },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setData(response.data.emissionRecords);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [year]);

  if (!data || data.length === 0) {
    return null;
  }

  const filteredData = data.filter(
    (item) => item.factor_name === "Vehicles" && item.net_emission > 0
  );

  if (filteredData.length === 0) {
    return <div>No data to display for Vehicles </div>;
  }

  const pieChartData = filteredData.map((item) => ({
    id: item.factor_name,
    value: item.net_emission,
    label: item.subsubfactor_name,
  }));

  return (
    <div>
      <PieChart
        series={[
          {
            data: pieChartData,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
          },
        ]}
        width={500}
        height={400}
      />
    </div>
  );
}

export default VehiclesPieChart;
