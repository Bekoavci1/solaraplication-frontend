import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialProjects = [
  {
    name: 'Berkay Gunes Panelleri',
    power: '5.18 kWp',
    address: 'Frederiklaan 10A, Eindhoven, 5612 CR, Netherlands',
    owner: 'Berkay Avcı',
    lastEdited: '15 Feb. 2023 22:54'
  },
  {
    name: 'Yunus Emre Görgü',
    power: '23.25 kWp',
    address: 'Woenselse Markt 30C, Eindhoven, 5612 CR, Netherlands',
    owner: 'Berkay Avcı',
    lastEdited: '8 Feb. 2023 23:49'
  }
  
];

export default function Content() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

   // Arama terimine göre projeleri filtreleyen fonksiyon
   const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Proje silme fonksiyonu
  const handleDelete = (projectName) => {
    setProjects(projects.filter((project) => project.name !== projectName));
  };

  // Proje düzenleme işlevi (uygulanacak)
  const handleEdit = (projectName) => {
    // Düzenleme işlevi burada olacak
    console.log('Edit project:', projectName);
  };

  const filteredProjects = searchTerm
    ? projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : projects;

    return (
      <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              {/* <Grid item>
                <SearchIcon color="inherit" sx={{ display: 'block' }} />
              </Grid> */}
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Search by project name"
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: 'default' },
                    startAdornment: <SearchIcon color="inherit" sx={{ display: 'block' }} />,
                  }}
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" sx={{ mr: 1 }}>
                  Add Project
                </Button>
                <Tooltip title="Reload">
                  <IconButton>
                    <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
  
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell align="right">Power</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Owner</TableCell>
                <TableCell align="right">Last Edited</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProjects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {project.name}
                  </TableCell>
                  <TableCell align="right">{project.power}</TableCell>
                  <TableCell align="right">{project.address}</TableCell>
                  <TableCell align="right">{project.owner}</TableCell>
                  <TableCell align="right">{project.lastEdited}</TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEdit(project.name)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(project.name)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }