import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Signup from '../form/signup';
import Signin from '../form/signin';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

import DrawerComp from "./drawer";

const pages = ['Home', 'About Us', 'Solar Panels', 'Sell', 'Your Plantations'];

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  const [isAdmin, setisAdmin] = React.useState(false);
  const [isSeller, setisSeller] = React.useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("1071"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(null);

  const openDialog = (type) => {
    setIsDialogOpen(true);
    setDialogType(type);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogType(null);
  };

  React.useEffect(() => {
    const checkTokenValidity = async () => {
      // Check if a valid token exists in localStorage
      const token = localStorage.getItem('token');
  
      if (token) {
        try {
          // Send the token to the server for verification
          const response = await axios.post('http://localhost:3000/user/check-token', null, {
            headers: {
            Authorization: `bearer ${token}`,
            }
          });
  
          if (response.data.valid) {
            // The token is valid
            setisLoggedIn(true);
            console.log("hi")

            const roles = response.data.data.roles;
            setisAdmin(roles.includes('admin'));
            setisSeller(roles.includes('seller'));

          } else {
            // The token is not valid; handle accordingly
            console.error('Invalid token');
            setisLoggedIn(false); // Update isLoggedIn state
            setisAdmin(false); // Update isAdmin state
            setisSeller(false);
            // You may want to redirect the user to the login page or handle it in another way
          }
        } catch (error) {
          console.error('Error checking token validity:', error.response?.data);
        }
      }
    };
  
    checkTokenValidity();
  }, []);

  return (
    <React.Fragment>
        <AppBar position="fixed" sx={{ backgroundColor: '#181818' , boxShadow: 'none' }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <IconButton sx={{ p: 0 }}>
                    <Avatar alt="logo" src="/src/images/logo.jpeg"/>
            </IconButton>
            {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        sx={{ mx: 2, color: 'white', fontSize: '1.1rem' }}
                    >
                        Home
                    </Button>
                    <Button
                        sx={{ mx: 2, color: 'white', fontSize: '1.1rem' }}
                    >
                        About Us
                    </Button>
                    <Button
                        sx={{ mx: 2, color: 'white', fontSize: '1.1rem' }}
                    >
                        Solar Panels
                    </Button>
                    {/* {isSeller && isLoggedIn && (
                    <>
                        <Button
                            sx={{ mx: 2, color: 'white', fontSize: '1.1rem' }}
                        >
                            Sell
                        </Button>
                        <Button
                            sx={{ mx: 2, color: 'white', fontSize: '1.1rem' }}
                        >
                            Your Plantations
                        </Button>
                    </>
                    )} */}
            </Box>

            

            <Box sx={{ flexGrow: 0 }}>
                {isLoggedIn ? (
                <div>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle fontSize='large'/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {isSeller && <MenuItem onClick={handleClose}>Your Plantations</MenuItem>}
                    {isSeller && <MenuItem onClick={handleClose}>Sell</MenuItem>}
                    <MenuItem onClick={handleClose}>Personal Information</MenuItem>
                    <MenuItem onClick={handleClose}>Change Password</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                </div>
            ) : (
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        onClick={() => openDialog('signin')} // Open the Signin dialog
                        sx={{ mx: 2, color: 'white', fontSize: '1.1rem' }}
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => openDialog('signup')} // Open the Signup dialog
                        sx={{ mx: 2, color: 'white', fontSize: '1.1rem' }}
                    >
                        Signup
                    </Button>
                </Box>
            )}
            </Box>
            </>
          )}
            </Toolbar>
        </Container>
        </AppBar>
        {isDialogOpen && (
        <Dialog
          open={isDialogOpen}
          // onClose={closeDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            style: {
              height: '67vh',
              width: '40vw',
              // minHeight: '30%',
              borderRadius: 16,
            },
          }}
          static
          // onClose={() => null}
        >
          <DialogTitle>
            <IconButton
              edge="end"
              color="inherit"
              onClick={closeDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {dialogType === 'signin' && <Signin onClose={closeDialog} openDialog={openDialog} />}
            {dialogType === 'signup' && <Signup onClose={closeDialog} openDialog={openDialog} />}
          </DialogContent>
        </Dialog>
      )}
    </React.Fragment>
  );
}
export default Header;
