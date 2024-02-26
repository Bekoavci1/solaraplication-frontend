import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Örnek veri, gerçek uygulamada API'dan alınan veriler olacaktır.
const leadsData = [
  { id: 1, name: 'O. Yıldız', description: 'Nieuw', imageUrl: 'path/to/image1.jpg' },
  { id: 2, name: 'A. Demir', description: 'Gepland', imageUrl: 'path/to/image2.jpg' },
  // Daha fazla lead...
];

function LeadsPage() {
  return (
    <Grid container spacing={4}>
      {leadsData.map((lead) => (
        <Grid item key={lead.id} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={lead.imageUrl}
                alt={`Image for ${lead.name}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {lead.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {lead.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default LeadsPage;
