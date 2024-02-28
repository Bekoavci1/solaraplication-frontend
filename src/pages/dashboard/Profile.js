import React, { useState } from 'react';
import { Avatar, Button, TextField, Grid, Paper, Typography, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import LockResetIcon from '@mui/icons-material/LockReset';

function Profile({ onCancel }) {
  const [user, setUser] = useState({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    avatar: '/static/images/avatar/1.jpg', // Örnek bir avatar URL'si
    password: '', // Şifre için boş başlangıç değeri
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Profile saved:', user);
    // Burada kaydetme işlemleri yapılacak
  };

  const handleCancel = () => {
    // onCancel prop'u ile sayfayı geri döndürme işlevi sağlanmalı
    console.log('Cancel clicked');
    if (onCancel) {
      onCancel(); // onCancel fonksiyonu ile geri dönme işlevi
    }
  };

  const handleUpdatePassword = () => {
    console.log('Password updated:', user.password);
    // Burada şifre güncelleme işlemleri yapılacak
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: 500, margin: '20px auto' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} align="center">
          <Typography variant="h4">Profile Page</Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Avatar src={user.avatar} sx={{ width: 56, height: 56 }} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="First Name" fullWidth name="firstName" value={user.firstName} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Last Name" fullWidth name="lastName" value={user.lastName} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" fullWidth name="email" value={user.email} InputProps={{ readOnly: true, }} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Old Password" fullWidth name="password" type="password" value={user.password} onChange={handleInputChange} placeholder="Enter old password" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="New Password" fullWidth name="password" type="password" value={user.password} onChange={handleInputChange} placeholder="Enter new password" />
        </Grid>
        <Grid item xs={6} align="right">
          <Button startIcon={<CancelIcon />} variant="outlined" color="error" onClick={handleCancel}>Cancel</Button>
        </Grid>
        <Grid item xs={6} align="left">
          <Button startIcon={<SaveIcon />} variant="contained" color="primary" onClick={handleSave}>Save</Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button startIcon={<LockResetIcon />} variant="contained" color="secondary" onClick={handleUpdatePassword}>Update Password</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Profile;
