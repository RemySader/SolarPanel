import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Link, InputAdornment, IconButton } from "@mui/material";
import { Box, Stack } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [date, setDate] = React.useState(dayjs().startOf('day'));
  const [location, setLocation] = React.useState('');

  // const handleChange = (event) => {
  //   setLocation(event.target.value);
  // };
  const handleChange = (event, newValue) => {
    setLocation(newValue);
  };

  const cities = [
    'Baabda',
    'Boutchay',
    'Hazmieh',
    'Mansourieh',
    'Bsalim'
  ];

  const paperStyle = { padding: 20, width: 750 };
  const btnstyle = { backgroundColor:'#FFC857',color:'rgba(12, 12, 12, 0.87)',fontWeight:'900',fontSize:'20px',width:'150px',borderRadius:'80px',margin:'20px auto',textTransform: 'none' };
  const linkstyle = { color: '#FFC857', textDecorationColor: '#FFC857' }

  const validateForm = () => {
    let isValid = true;
    if (firstName.length < 2) {
      setFirstNameError('First name should have at least 2 characters.');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (lastName.length < 2) {
      setLastNameError('Last name should have at least 2 characters.');
      isValid = false;
    } else {
      setLastNameError('');
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format.');
      isValid = false;
    } else {
      setEmailError('');
    }

    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneNumberError('Invalid phone number. Phone number should be 8 digits.');
      isValid = false;
    } else {
      setPhoneNumberError('');
    }

    if (username.length < 3) {
      setUsernameError('Username should have at least 3 characters.');
      isValid = false;
    } else {
      setUsernameError('');
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password should be at least 8 characters with one uppercase letter, one lowercase letter, one digit, and one special character.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleClearErrorMessage = () => {
    setErrorMessage('');
  };

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
        <form>
          <Grid container alignItems='center' justifyContent='center'>
            <h3 style={{ marginBottom: '20px' }}>Sign Up</h3>
          </Grid>
          <Stack spacing={2} direction={'column'}>
            <Stack spacing={4} direction={'row'}>
              <TextField label='First Name' variant="outlined" placeholder='Enter First Name' fullWidth required
                value={firstName} onChange={(e) => setFirstName(e.target.value)} error={!!firstNameError} helperText={firstNameError}
              />
              <TextField label='Last Name' variant="outlined" placeholder='Enter Last Name' fullWidth required
                value={lastName} onChange={(e) => setLastName(e.target.value)} error={!!lastNameError} helperText={lastNameError}
              />
            </Stack>
            <Stack spacing={4} direction={'row'}>
              <TextField label='Email' variant="outlined" placeholder='Enter Email' type='email' fullWidth required
                value={email} onChange={(e) => setEmail(e.target.value)} error={!!emailError} helperText={emailError}
              />
              <TextField label='Phone Number' variant="outlined" placeholder='Enter Phone Number' type='tel' fullWidth required
                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} error={!!phoneNumberError} helperText={phoneNumberError}
              />
            </Stack>
            <Stack spacing={4} direction={'row'}>
            {/* <FormControl fullWidth sx={{ width: '50%' }}>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                label="Location"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
            <Autocomplete
                  options={cities}
                  fullWidth
                  value={location}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Location"
                      variant="outlined"
                      sx={{ width: '100%' }} //50%
                    />
                  )}
              />
             <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={['DatePicker', 'DatePicker']}> */}
                <DatePicker
                  label="Date of Birth"
                  variant="outlined"
                  placeholder='Date of Birth'
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                  fullWidth
                  required
                  sx={{ width: '100%' }}
                />
              {/* </DemoContainer> */}
            </LocalizationProvider>
            </Stack>
            <Stack spacing={4} direction={'row'}>
              <TextField label='Username' variant="outlined" placeholder='Enter Username' fullWidth required
                value={username} onChange={(e) => setUsername(e.target.value)} error={!!usernameError} helperText={usernameError}
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
                error={!!passwordError} 
                helperText={passwordError}
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
            </Stack>
            <FormControl sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Buyer" control={<Radio />} label="Buyer" />
                <FormControlLabel value="Seller" control={<Radio />} label="Seller" />
              </RadioGroup>
            </FormControl>
            {errorMessage && (
              <Typography style={{ color: 'red', textAlign: 'center' }}>
                {errorMessage}
              </Typography>
            )}
            {/* <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={handleClearErrorMessage}>Sign Up</Button> */}
            <Button variant="contained" style={btnstyle}>Sign Up</Button>
          </Stack>
        </form>
        <Stack spacing={2}>
          <Typography style={{ textAlign: 'center' }}>
            Have an account?&nbsp;
            <Link href="/" style={linkstyle}>
              Login
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SignUp;