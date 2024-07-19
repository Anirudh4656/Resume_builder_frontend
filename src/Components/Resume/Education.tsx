import { Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import FormSection from './FormSection';

const Education:React.FC = () => {
  
  const school = {
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    gpa: 0
};
return (
  <React.Fragment>
      <Typography variant="h6" gutterBottom>
          Educational Details
      </Typography>
      <FormSection input={school} name="School" section="education" />
  </React.Fragment>
);
}

export default Education
