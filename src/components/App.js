import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch, FormControlLabel, Typography, BottomNavigation,BottomNavigationAction, Container, Stack, TextField, Button, MenuItem } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const options=[
    {
        value: 'GET',
        label: 'GET'
    },
    {
        value: 'PUT',
        label: 'PUT'
    },
    {
        value: 'POST',
        label: 'POST'
    },
    {
        value: 'PATCH',
        label: 'PATCH'
    },
    {
        value: 'DELETE',
        label: 'DELETE'
    }
]



const App = () => {
    const [darkMode, setDarkMode]=useState(false)
    const [value, setValue]=useState(0)
    const [endpoint, setEndpoint]=useState('')
    const [response, setResponse]=useState('')
   
    const handleSubmit=async(e) => {
        e.preventDefault()
        const result=await axios.get(endpoint)
        setResponse(JSON.stringify(result.data))
    }
    const theme= createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light'
        }
    })

    
  return (
    <ThemeProvider theme={theme} >
        <CssBaseline maxWidth="lg"/>
        <FormControlLabel  
          value="end"
          control={<Switch color="primary" checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>}
          label="Dark Mode"
          labelPlacement="end"
        />
        <div className='app'>
            <header className='App-header'>
                    <Typography variant='h3' style={{textAlign: 'center', fontSize: '35px', marginBottom: '20px'}}>
                        API testing
                    </Typography>
                </header>
            <Container style={{maxWidth: '1000px', height: '660px'}}>
            <form onSubmit={handleSubmit}>
                <Stack direction="row" spacing={2}>
                <TextField 
                    style={{width: '130px'}}
                    defaultValue="GET"
                    select
                    label="Select"
                    id="outlined-select-options"
                    size='small'
                >
                    {options.map((option) => (
                        <MenuItem key={option.label} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField 
                    variant='outlined'
                    label="Enter request URL"
                    id="outlined-basic" 
                    size='small'
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    sx={{
                        width: 750,
                        maxWidth: '100%'
                    }}
                >
                </TextField>
                <Button 
                    variant='contained'
                    type='submit'
                    size="medium"
                    endIcon={<SendIcon />}
                >
                    Send
                </Button>
                </Stack>
                </form>
                <BottomNavigation
                    value={value}
                    showLabels
                    onChange={(e, newValue) =>{
                        setValue(newValue)
                    }}
                >
                    <BottomNavigationAction label="Params"/>
                    <BottomNavigationAction label="Authorization"/>
                    <BottomNavigationAction label="Headers"/>
                </BottomNavigation>
                <div>
                    {response}
                </div>
            </Container>
        </div>
    </ThemeProvider>
  )
}

export default App
