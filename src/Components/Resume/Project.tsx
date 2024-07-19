import { Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import FormSection from './FormSection';

const Project:React.FC = () => {
  
    const project = {
        projectName: '',
        keywords: [''],
        projectLink: '',
        projectDescription: [''],
    }
return (
  <React.Fragment>
      <Typography variant="h6" gutterBottom>
         Project Details
      </Typography>
      <FormSection input={project} name="Project" section="projects" />
  </React.Fragment>
);
}

export default Project
