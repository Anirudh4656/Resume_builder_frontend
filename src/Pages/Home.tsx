import React from "react";
import NavBar from "./Navbar";

import { Button, Container, Grid, Typography } from "@mui/material";
import { RootState } from "../Store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const Home: React.FC = () => {
  const navigate = useNavigate();
  const user=useSelector((state:RootState)=>state.auth.user) 
const handleClick=()=>{
  navigate("/builder");
}
  // const history = useHistory();
  return (
    <>
       <NavBar />
       <Container >
      <Grid >
        <Grid item xs={12} >
          <div>
            <Typography variant="h3">Build your resume today</Typography>
            <Typography variant="h5" gutterBottom>
              Build a resume tailored to your needs
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleClick}
             
            >
              BUILD MY RESUME
            </Button> 
           
          </div>
         
        </Grid>
      </Grid>


    </Container>
    </>
  );
};

export default Home;
