import { Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import FormSection from './FormSection';

const Experience:React.FC = () => {
  
  const workEx = {
    title: "",
    organisation: "",
    startDate: "",
    endDate: "",
    description: [""]
};
return (
  <React.Fragment>
      <Typography variant="h6" gutterBottom>
          Experience Details
      </Typography>
      <FormSection input={workEx} name="Experience" section="experience" />
  </React.Fragment>
);
}

export default Experience
