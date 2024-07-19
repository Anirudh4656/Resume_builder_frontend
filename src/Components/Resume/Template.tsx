import React, { ChangeEvent, useState } from 'react';
import { Alert, Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import {setTitle} from '../../Store/reducers/ResumeReducer';
import { AppDispatch, RootState } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import templates from '../templates/templates';
import { setTemplate } from '../../Store/reducers/ResumeReducer';
import { useNavigate } from 'react-router-dom';
const Template:React.FC = () => {
  const title=useSelector((state:RootState)=>state.resume.title) 
  const template=useSelector((state:RootState)=>state.resume.template) 
  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState<string>("");
  const navigate = useNavigate()
  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
 ;
    setForm(()=>event.target.value);
  dispatch(setTitle(form))
  //use state
    // validateInput(value)
  }
  const handleClick =(template:any) => {
  //   console.log(template,"template")
  console.log("handleClick",template);
   dispatch(setTemplate(template));
    // const update = 'update'
    navigate(`/${template}`)
   
}

  console.log("title",template);
  return (
    <React.Fragment>
            <h5>Choose Template</h5>
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="title"
                            name="title"
                            label="Title"
                            
                            onChange={handleChange}
                            
                            fullWidth
                        />
                    </Grid>
                    {/* {(errorText) ?
                        <Alert className={classes.alert} severity="error">{errorText}</Alert> : <div></div>
                    } */}
                    {templates.map((template:any, index) => (
                        <Grid key={index} item xs={12}  >
                          {template}
                            <Button onClick={() =>  handleClick(template)}
                                variant="contained"
                                color="primary"
                              
                            >
                                {template}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </React.Fragment>
        </React.Fragment >
  );
};

export default Template;