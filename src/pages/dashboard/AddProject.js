import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  AppBar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PlaceIcon from "@mui/icons-material/Place";
import NoteIcon from "@mui/icons-material/Note";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Map from "./Map";

export default function AddProject() {
  // Drawer için state
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Form state'leri ve handler fonksiyonları burada yer alacak

  // Drawer'ı kontrol etmek için fonksiyon
  const handleAccordionChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };
  const handleAccordionChange2 = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // İkon listesi
  const icons = [<HomeIcon />, <InfoIcon />, <PlaceIcon />, <NoteIcon />];

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TabContext value={value}>
            <Box
              sx={{
                display: "flex",
                borderBottom: 1,
                justifyContent: "center",
                borderColor: "divider",
                backgroundColor: "#009BE5",
                width: "99%",
                borderRadius: "20px",
              }}
            >
              <TabList
                onChange={handleChange}
                textColor="inherit"
                aria-label="lab API tabs example"
                sx={{}}
              >
                <Tab
                  label="Project"
                  sx={{ fontSize: "20px", color: "white" }}
                  value="1"
                  icon={<HomeIcon />}
                />
                <Tab
                  label="Details"
                  sx={{ fontSize: "20px", color: "white" }}
                  value="2"
                  icon={<InfoIcon />}
                />
                <Tab
                  label="Location"
                  sx={{ fontSize: "20px", color: "white" }}
                  value="3"
                  icon={<PlaceIcon />}
                />
                <Tab
                  label="Notes"
                  sx={{ fontSize: "20px", color: "white" }}
                  value="4"
                  icon={<NoteIcon />}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Accordion
                expanded={expanded === "projectDetails"}
                onChange={handleAccordionChange("projectDetails")}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">PROJECT DETAILS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField fullWidth label="Project Name" margin="normal" />
                  <TextField fullWidth label="Address" margin="normal" />
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "NETPARAMETERS"}
                onChange={handleAccordionChange2("NETPARAMETERS")}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">NET PARAMETERS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Electricity Net</InputLabel>
                    <Select label="Electricity Net">
                      <MenuItem value="230V">230V L-N</MenuItem>
                      {/* Diğer seçenekler */}
                    </Select>
                  </FormControl>
                  <TextField fullWidth label="Power Factor" margin="normal" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Export Limit"
                  />
                </AccordionDetails>
              </Accordion>

              {/* Net Parameters and other cards can also be converted to accordion panels if needed */}
            </TabPanel>

            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 250,
            right: 16,
          }}
        >
          <Button variant="contained" color="primary">
            Confirm
          </Button>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
            Cancel
          </Button>
        </Box>

        <Grid item xs={12} sm={8} sx={{ flex: '1 0 auto', height: 'calc(100vh - 64px)' }} >
          <div style={{ width: "100%", height: "100%" }}>
            <Map/>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
