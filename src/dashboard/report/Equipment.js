import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "axios";

function EquipmentPieChart({ year }) {
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
    (item) => item.factor_name === "Equipment" && item.net_emission > 0
  );

  if (filteredData.length === 0) {
    return <div>No data to display for Equipments</div>;
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
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
}

export default EquipmentPieChart;
