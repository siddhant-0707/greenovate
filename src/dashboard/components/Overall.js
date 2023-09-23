import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f8f4f4",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //   textAlign: 'center',
  color: theme.palette.text.primary,
}));

const Overall = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#f8f4f4" }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>
            <h5>Your overall</h5>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={months}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="January" />
              )}
            />
          </Item>
        </Grid>
        <Grid xs={2}>
          <Item>
            <div>
                <h6>Emissions</h6>
                <p>MTCO2E</p>
            </div>
            
            <div>
                <h6>Spend</h6>
            </div>
          </Item>
        </Grid>
        <Grid xs={10}>
          <Item>Category</Item>
          <Item>Spend</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

const months = [
  { label: "January", month: 1 },
  { label: "February", year: 2 },
  { label: "March", year: 3 },
  { label: "April", year: 4 },
  { label: "May", year: 5 },
  { label: "June", year: 6 },
  { label: "July", year: 7 },
  { label: "August", year: 8 },
  { label: "September", year: 9 },
  { label: "October", year: 10 },
  { label: "November", year: 11 },
  { label: "December", year: 12 },
];

export default Overall;
