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

import DrawerComp from "./drawer";

const pages = ['Home', 'About Us', 'Solar Panels', 'Sell', 'Your Plantations'];

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  const [isAdmin, setisAdmin] = React.useState(true);
  const [isSeller, setisSeller] = React.useState(true);

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

  return (
    <React.Fragment>
        <AppBar position="fixed" sx={{ backgroundColor: 'transparent' , boxShadow: 'none' }}>
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
                    {isSeller && (
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
                    )}
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
          onClose={closeDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            style: {
              maxHeight: '60vh',
              width: '40vw',
              minHeight: '30%',
              borderRadius: 16,
            },
          }}
        >
          <DialogContent>
            {dialogType === 'signin' && <Signin onClose={closeDialog} />}
            {dialogType === 'signup' && <Signup onClose={closeDialog} />}
          </DialogContent>
        </Dialog>
      )}
    </React.Fragment>
  );
}
export default Header;
