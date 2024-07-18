import { Alert, Grid, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';

interface FormState{
    email:string;
    firstName:string;
    lastName:string;
    website:string;
    phone:string;
}
const initialState:FormState ={
    email:"",
    firstName:"",
    lastName:"",
    website:"",
    phone:""

}
// interface FormState {
//     username: string;
//     email: string;
//     password: string;
//   }
  
const Project:React.FC=()=>{
    const [form, setForm] = useState<FormState>(initialState);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, [event.target.name]: event.target.value });
    const project = {
        projectName: '',
        keywords: '',
        projectLink: '',
        projectDescription: [''],
    };


    return(
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Project Details
        </Typography>
        {/* <FormSection input={project} name="Project" section="projects" resume={resume} /> */}
    </React.Fragment>
    )
}
export default Project