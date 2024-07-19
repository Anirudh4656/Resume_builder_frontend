import { Alert, Grid, TextField, Typography } from '@mui/material';
import { AppDispatch, RootState } from "../../Store/store";
import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { setPersonal } from '../../Store/reducers/ResumeReducer';
import { useDispatch } from "react-redux";
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
 
const Personal:React.FC=()=>{
    const dispatch = useDispatch<AppDispatch>();
    const user=useSelector((state:RootState)=>state.resume.personal) 
    console.log("resume",user);
    const [form, setForm] = useState<FormState>(initialState);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setForm({ ...form, [event.target.name]: event.target.value } );
        dispatch(setPersonal(form));
    }
const [errorText, setErrorText] = useState<FormState>({
    email: '',
    firstName: '',
    lastName: '',
    website: '',
    phone: ''
})
const regex = {
    email: /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, //eslint-disable-line
    name: /^[A-Z][a-zA-Z]{1,}$/,
    website: /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, //eslint-disable-line
    phone: /^\d{6,}$/
}
const validateInput = (name:string, input:string) => {
    if (name === 'firstName' || name === 'lastName') {
        if (!input.match(regex.name))
            setErrorText({ ...errorText, [name]: 'Invalid Name; Length > 2' })
        else setErrorText({ ...errorText, [name]: '' })
    }
    if (name === 'email') {
        if (!input.match(regex.email))
            setErrorText({ ...errorText, [name]: 'Invalid Email Id' })
        else setErrorText({ ...errorText, [name]: '' })
    }
    if (name === 'phone') {
        if (!input.match(regex.phone))
            setErrorText({ ...errorText, [name]: 'Invalid Phone No., Min. Length 6' })
        else setErrorText({ ...errorText, [name]: '' })
    }
    if (name === 'website') {
        if (!input.match(regex.website))
            setErrorText({ ...errorText, [name]: 'Invalid Link' })
        else setErrorText({ ...errorText, [name]: '' })
    }
}
    return(
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personal Details
            </Typography>
            <hr ></hr>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        value={form.firstName}
                        onChange={handleChange}
                        fullWidth
                        autoComplete="given-name"
                        
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        value={form.lastName}
                        onChange={handleChange}
                        fullWidth
                        autoComplete="family-name"
                       
                    />
                </Grid>
                {/* {(errorText.firstName) ?
                    <Alert className={classes.alertHalf} severity="error">{errorText.firstName}</Alert> : <div className={classes.alertHalf} ></div>
                }
                {(errorText.lastName) ?
                    <Alert className={classes.alertHalf} severity="error">{errorText.lastName}</Alert> : <div></div>
                } */}
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        autoComplete="email"
                       
                    />
                </Grid>
                {/* {(errorText.email) ?
                    <Alert className={classes.alert} severity="error">{errorText.email}</Alert> : <div></div>
                } */}
                <Grid item xs={12}>
                    <TextField
                        id="phone"
                        name="phone"
                        label="Phone No."
                        value={form.phone}
                        onChange={handleChange}
                        fullWidth
                        autoComplete="tel"
                        
                    />
                </Grid>
                {/* {(errorText.phone) ?
                    <Alert className={classes.alert} severity="error">{errorText.phone}</Alert> : <div></div>
                } */}

                <Grid item xs={12}>
                    <TextField
                        id="website"
                        name="website"
                        label="Professional Profile/Website"
                        value={form.website}
                        onChange={handleChange}
                        fullWidth
                        
                    />
                </Grid>{(errorText.website) ?
                    <Alert  severity="error">{errorText.website}</Alert> : <div></div>
                }
            </Grid>
        </React.Fragment>
    )
}
export default Personal