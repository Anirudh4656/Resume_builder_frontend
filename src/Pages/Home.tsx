import React from "react";
import NavBar from "./Navbar";

import { Button, Container, Grid, Typography } from "@mui/material";

// import { useHistory } from "react-router-dom";


const Home: React.FC = () => {
const handleClick=()=>{
    
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
