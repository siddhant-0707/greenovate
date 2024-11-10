import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "axios";

function PieChartComponent({ year }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (year) {
      const options = {
        method: "GET",
        url: "http://localhost:5000/api/emission/factor-wise-emission-sum",
        params: { year: year },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [year]);

  const pieChartData = data.map((item) => ({
    id: item.factorId,
    value: item.totalEmission,
    label: item.factorName,
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

export default PieChartComponent;
