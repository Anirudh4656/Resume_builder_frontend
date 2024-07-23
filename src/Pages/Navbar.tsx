import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

const Navbar: React.FC = () => {

const user=useSelector((state:RootState)=>state.auth.user) 

const location = useLocation();
  const navigate = useNavigate();
  console.log("user",user);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const Upload = () => {
    navigate("/upload");
  };
  const homepage = () => {
    navigate("/");
  };

 
  const currentPath = location.pathname;
  return (
    <AppBar
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        height: "53px",
        paddingLeft: "25px",
        backgroundColor: "white",
        borderTop: "1px solid #ccc",
        position: "relative",
      }}
      position="static"
      color="inherit"
    >
      <Button onClick={homepage} variant="contained">
        Home
      </Button>
      <Toolbar
        style={{ display: "flex", justifyContent: "flex-end", width: "400px" }}
      >
        {user ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "400px",
              alignItems: "center",
            }}
          >
         
             <Typography variant="h6">{user.username}</Typography>
          
            
            
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
           
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
