import { Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import FormSection from './FormSection';

const Skill:React.FC = () => {
  
  const skill = {
    skillName: '',
    keywords: ['']
};
return (
  <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Skill Details
      </Typography>
      <FormSection input={skill} name="Skill" section="skills" />
  </React.Fragment>
);
}

export default Skill
