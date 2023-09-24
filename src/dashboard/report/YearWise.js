import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart } from "@mui/x-charts/BarChart";

export default function YearWiseComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://greenovate-server.vercel.app/api/emission/year-wise-emission-sum",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const yearList = data.map((item) => item.year);
  const totalEmissions = data.map((item) => item.totalEmission);

  return yearList.length > 0 && totalEmissions.length > 0 ? (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: yearList,
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: totalEmissions,
        },
      ]}
      width={500}
      height={300}
    />
  ) : (
    <div>Loading...</div>
  );
}
