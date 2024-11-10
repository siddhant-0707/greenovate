import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper"; // Added Paper component for borders

import Navbar from "../components/Navbar";
import PieChartComponent from "./PieChart";
import YearWiseComponent from "./YearWise";
import BuildingPieChart from "./Building";
import EquipmentPieChart from "./Equipment";
import ProductPieChart from "./Product";
import VehiclesPieChart from "./Vehicles";
import WaterPieChart from "./Water";

export default function Report() {
  const [year, setYear] = useState("");
  const [yearsList, setYearsList] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/api/emission/year-wise-emission-sum",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const years = response.data.map((item) => item.year);
        setYearsList(years);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  // Define a style for the Paper component (border and padding)
  const paperStyle = {
    padding: "16px",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Year"
            onChange={handleChange}
          >
            {yearsList.map((yearItem) => (
              <MenuItem key={yearItem} value={yearItem}>
                {yearItem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={paperStyle}>
            <PieChartComponent year={year} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={paperStyle}>
            <YearWiseComponent />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={paperStyle}>
            <BuildingPieChart year={year} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={paperStyle}>
            <EquipmentPieChart year={year} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={paperStyle}>
            <ProductPieChart year={year} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={paperStyle}>
            <VehiclesPieChart year={year} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={paperStyle}>
            <WaterPieChart year={year} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
