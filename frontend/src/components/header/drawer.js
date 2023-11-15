import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


const pages = ['Home', 'About Us', 'Solar Panels', 'Sell', 'Your Plantations', 'Login', 'Signup'];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoggedIn, setisLoggedIn] = React.useState(true);
  const [isAdmin, setisAdmin] = React.useState(true);
  const [isSeller, setisSeller] = React.useState(true);

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >


        <List>
        <ListItemButton>
            <ListItemIcon>
            <ListItemText>Home</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
            <ListItemText>About Us</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
            <ListItemText>Solar Panels</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        {isSeller && (
        <>
            <ListItemButton>
                <ListItemIcon>
                <ListItemText>Sell</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                <ListItemText>Your Plantations</ListItemText>
                </ListItemIcon>
            </ListItemButton>
        </>
        )}
        {isLoggedIn ? (
        <div>    
            <ListItemButton>
                <ListItemIcon>
                <ListItemText>Personal Information</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                <ListItemText>Change Password</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                <ListItemText>Logout</ListItemText>
                </ListItemIcon>
            </ListItemButton>
        </div>
        ) : (
            <div>    
            <ListItemButton>
                <ListItemIcon>
                <ListItemText>Login</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                <ListItemText>Signup</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            </div>
        )}
        </List>
        
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;