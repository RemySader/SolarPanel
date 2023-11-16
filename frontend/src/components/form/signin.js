import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Link, InputAdornment, IconButton } from "@mui/material";
import { Box, Stack } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login({ onClose, openDialog }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    // const navigate = useNavigate();

    const paperStyle = { padding: 100, width: 280 };
    const btnstyle = { backgroundColor:'#FFC857',color:'rgba(12, 12, 12, 0.87)',fontWeight:'900',fontSize:'20px',width:'150px',borderRadius:'80px',margin:'20px auto',textTransform: 'none' };
    const linkstyle = { color: '#FFC857', textDecorationColor: '#FFC857' }

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="45vh"
        >
            <Paper elevation={0} style={paperStyle}>
                <Grid container alignItems='center' justifyContent='center'>
                    <h3 style={{ marginBottom: '20px' }}>Sign In</h3>
                </Grid>
                <Stack spacing={2}>
                    <TextField
                        label='Username'
                        variant="outlined"
                        placeholder='Enter Username'
                        fullWidth
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label='Password'
                        variant="outlined"
                        placeholder='Enter Password'
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {/* <Button type='submit' color='primary' variant="contained" style={btnstyle} >Sign In</Button> */}
                    {/* onclick handleLogin function (axios) */}
                    <Button variant="contained" style={btnstyle}>Sign In</Button>
                </Stack>
                <Stack spacing={2}>
                    {loginMessage && (
                        <Typography style={{ textAlign: 'center', color: 'red' }}>{loginMessage}</Typography>
                    )}
                    <Typography style={{ textAlign: 'center' }}>
                        {/* <Link href="/reset-link" > */}
                        <Link style={ linkstyle }>
                            Forgot password?
                        </Link>
                    </Typography>
                    <Typography style={{ textAlign: 'center' }}> Don't have an account?&nbsp;
                        {/* <Link href="/signup" > */}
                        <Link 
                        style={ linkstyle }
                        onClick={() => {
                            onClose(); // Close the Sign In dialog
                            openDialog('signup'); // Open the Sign Up dialog
                          }}
                        >
                            Sign Up
                        </Link>
                    </Typography>
                </Stack>
            </Paper>
        </Box>
    );
}

export default Login;
