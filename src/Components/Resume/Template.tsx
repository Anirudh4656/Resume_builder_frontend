import React from 'react';
import { Alert, Box, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
// import { LocalOffer, Web, DeveloperMode } from '@material-ui/icons';

const Template = () => {
  return (
   <Grid>
      <Grid item xs={12} md={5}>
        <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: 16 }}>
          Template
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              {/* <LocalOffer /> */}
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">Femicam 1928.id</Typography>}
              secondary={<Typography variant="body1" style={{ color: '#666' }}>Front-End Developer (Self-Employed)</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              {/* <Web /> */}
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">Ciptaloka.com</Typography>}
              secondary={<Typography variant="body1" style={{ color: '#666' }}>Front-End Developer (Self-Employed)</Typography>}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: 16 }}>
          Skills
        </Typography>
        <Box display="flex" flexWrap="wrap">
          <Typography variant="body1" style={{ marginRight: 8 }}>
            Languages:
          </Typography>
          <Typography variant="body1">
            JavaScript, TypeScript, HTML, CSS
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap">
          <Typography variant="body1" style={{ marginRight: 8 }}>
            Libraries:
          </Typography>
          <Typography variant="body1">
            React, React Native, Redux, Next.js, Tailwind CSS
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap">
          <Typography variant="body1" style={{ marginRight: 8 }}>
            Tools:
          </Typography>
          <Typography variant="body1">
            Git, Github, VSCode, Figma, Jira
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Template;