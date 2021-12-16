import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export const NavBar = () => {
  const history = useHistory();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{marginTop: '20px'}}>
          <Toolbar>
          <Button
            onClick = {() => history.push("/") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              Home
          </Button>
          <Button
            onClick = {() => history.push("/users") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              All Users
          </Button>
          <Button
            onClick = {() => history.push("/users/add-users") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              Add Users
          </Button>
            </Toolbar>
        </AppBar>
      </Box>
    );
  };