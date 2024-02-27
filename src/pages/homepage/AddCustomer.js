import React from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';


export default function AddCustomer() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            background: "",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography color="inherit" variant="h5" component="h1">
            Personal Information
          </Typography>
          <Stack direction="row">
            <TextField
              id="standard-search"
              label="Name"
              type="search"
              variant="standard"
              sx={{ marginRight: 2 }}
            />

            <TextField
              id="standard-search"
              label="Surname"
              type="search"
              variant="standard"
            />
          </Stack>
          <Stack style={{ width: "40vh" }} direction="column">
            <TextField
              id="standard-search"
              label="Email"
              type="search"
              variant="standard"
              fullWidth
            />
          </Stack>

          <Typography
            style={{ marginTop: "10vh" }}
            color="inherit"
            variant="h5"
            component="h1"
          >
            Address Information
          </Typography>

          <Stack style={{ width: "40vh" }} direction="column">
          <TextField
              id="standard-search"
              label="Street"
              type="search"
              variant="standard"
            />
            </Stack>
           
    <Stack direction="row">
            <TextField
              id="standard-search"
              label="House Number"
              type="search"
              variant="standard"
              sx={{ marginRight: 2 }}

            />
            <TextField
              id="standard-search"
              label="Country"
              type="search"
              variant="standard"
            />
          </Stack>
          <Stack direction="row">
            

            <TextField
              id="standard-search"
              label="City"
              type="search"
              variant="standard"
              sx={{ marginRight: 2 }}

            />
            <TextField
              id="standard-search"
              label="Post Code"
              type="search"
              variant="standard"
            />
          </Stack>
          <Stack style={{ width: "40vh" }} direction="column">
            

            <TextField
              id="standard-search"
              label="Addition"
              type="search"
              variant="standard"
              multiline
              rows={2}
            />
          </Stack>
          <Typography
            style={{ marginTop: "10vh" }}
            color="inherit"
            variant="h5"
            component="h1"
          >
            Contact Information
          </Typography>
          <Stack direction="row">
            <TextField
              id="standard-search"
              label="VAT Number"
              type="search"
              variant="standard"
              sx={{ marginRight: 2 }}
            />

            <TextField
              id="standard-search"
              label="VAT Office"
              type="search"
              variant="standard"
            />
          </Stack>
          <Stack direction="row">
            <TextField
              id="standard-search"
              label="Phone"
              type="search"
              variant="standard"
              sx={{ marginRight: 2 }}
            />

            <TextField
              id="standard-search"
              label="Mobile"
              type="search"
              variant="standard"
            />
          </Stack>
          <Stack style={{ width: "40vh" }} direction="column">
            <TextField
              id="standard-search"
              label="Notes"
              type="search"
              variant="standard"
              multiline
              rows={4}
            />
          </Stack>
          <Button
          variant="contained"
          sx={{ marginTop:"2vh", width:"40vh"}}
        >
          <Typography>Save</Typography>
        </Button>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Box
          sx={{
            display: "flex",
            background: "#eaeff1",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>Map</h1>
        </Box>
      </Grid>
    </Grid>
  );
}
