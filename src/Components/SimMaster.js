import React from 'react';
import { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, Stack, Button, CssBaseline, AppBar, Toolbar, Typography, Box, TextField, Grid } from '@mui/material';
import Home from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { DCU, dropdowns } from './Dropdowns';




export default function SelectTextFields() {
  const [currency, setCurrency] = useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar >
          <Box sx={{ width: '100%', maxWidth: 300 }}>

            <Typography variant='h6' gutterBottom component="div"><Home color="black" /><KeyboardArrowRightIcon />Asset Management</Typography>
            <Typography variant="h6" gutterBottom component="div">Maintain SIM</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row', }}>
      </Box>

      <TextField
        id="outlined-select-currency-native"
        select
        required label="Select Service Provider"
        value={currency}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }} /
      >

      <TextField
        id="outlined-select-currency-native"
        select
        required label=" Select Service Type"
        value={currency}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
      >
        {dropdowns.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

      </TextField>

      <div>

        <TextField
          id="outlined-select-currency-native"
          required label="Phone"
        >

        </TextField>

        <TextField
          id="outlined-select-currency-native"
          required label="SIM Number"
        >
        </TextField>
      </div>
      <div>

        <TextField
          id="outlined-select-currency-native"
          select
          required
          label=" Select Service Number DCU"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >

          {DCU.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency-native"
          required label="APN Name"
        >

        </TextField>
      </div>
      <Grid container direction="row" alignContent="Center" justifyContent="center" spacing={2}>
        <Grid item xs={3} ></Grid>
        <Grid item xs={3} >
          <FormControl component="fieldset">
            <Typography variant="h6" alignItems="center">IP Type</Typography>

            <RadioGroup row aria-label="IP type" name="row-radio-buttons-group">
              <FormControlLabel value="static" control={<Radio />} label="Static" />
              <FormControlLabel value="dynamic" control={<Radio />} label="Dynamic" />
            </RadioGroup>
          </FormControl></Grid>
        <Grid item xs={3}>
          <FormControl component="fieldset">
            <Typography variant="h6" alignItems="center">Type of IP</Typography>
            <RadioGroup row aria-label="Type of IP" name="row-radio-buttons-group">
              <FormControlLabel value="IPV4" control={<Radio />} label="IPV4" />
              <FormControlLabel value="IPV6" control={<Radio />} label="IPV6" />

            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <Grid container direction="row" alignContent="Center" justifyContent="center" spacing={2}>
        <Grid item xs={3} ></Grid>
        <Grid item xs={4} >
          <FormControl component="fieldset">
            <Typography variant="h6" align="left">IP Address</Typography>
            <Grid item xs={4}>
              <TextField
                id="outlined-select-currency-native"
                native="outlined"
                required label="IP Address"
              > </TextField></Grid>
          </FormControl></Grid>
        <Grid item xs={4}></Grid>
      </Grid>


      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained" color="success">SUBMIT </Button>
        <Button variant="contained">CLEAR</Button>
      </Stack>
    </Box>
  );
}

