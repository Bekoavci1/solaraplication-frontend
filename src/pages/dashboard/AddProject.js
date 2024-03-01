import React from 'react';
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
  AppBar
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PlaceIcon from '@mui/icons-material/Place';
import NoteIcon from '@mui/icons-material/Note';

export default function AddProject() {
  // Drawer için state
  const [expanded, setExpanded] = React.useState(false);

  // Form state'leri ve handler fonksiyonları burada yer alacak
  
  // Drawer'ı kontrol etmek için fonksiyon
  const handleAccordionChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // İkon listesi
  const icons = [<HomeIcon />, <InfoIcon />, <PlaceIcon />, <NoteIcon />];

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{ width: 240, [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' } }}
      >
        <List>
          {['Project', 'Details', 'Location', 'Notes'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <Typography>{text}</Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            {/* Kartlar */}
            <Card>
              <CardContent>
                <Typography variant="h6">PROJECT DETAILS</Typography>
                {/* Form elemanları */}
                <TextField fullWidth label="Project Name" margin="normal" />
                <TextField fullWidth label="Address" margin="normal" />
                {/* Diğer alanlar */}
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6">NET PARAMETERS</Typography>
                {/* Form elemanları */}
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
                {/* Diğer alanlar */}
              </CardContent>
            </Card>
            {/* Diğer Kartlar */}
          </Grid>
          <Grid item xs={12} sm={8}>
            {/* Harita */}
            <div style={{ width: '100%', height: '100%' }}>
              {/* Harita entegrasyonu buraya */}
            </div>
          </Grid>
        </Grid>
        <Box sx={{ position: 'absolute', bottom: 16, left: 250, right: 16 }}>
          <Button variant="contained" color="primary">Confirm</Button>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }}>Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
}
