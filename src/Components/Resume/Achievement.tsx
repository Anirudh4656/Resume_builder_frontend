import { Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import FormSection from './FormSection';

const Achievement:React.FC = () => {
  const user=useSelector((state:RootState)=>state.resume)
  console.log("Achievement",user); 
  const achievement = {
    title: '',
    date: '',
    organisation: '',
    description: ['']
};
return (
  <React.Fragment>
      <Typography variant="h6" gutterBottom>
          Achievement Details
      </Typography>
      {/* <FormSection input={achievement} name="Achievement" section="achievements" /> */}
  </React.Fragment>
);
}

export default Achievement
