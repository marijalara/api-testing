import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch, FormControlLabel, Typography, BottomNavigation,BottomNavigationAction, Container, Stack, TextField, Button, MenuItem } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import SendIcon from '@mui/icons-material/Send';

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

const musicPlatform=[
    {
        id: 1,
        name: 'youtube'
    },
    {
        id: 2,
        name: 'spotify'
    },
    {
        id: 3,
        name: 'deezer'
    }
]

const App = () => {
    const [darkMode, setDarkMode]=useState(false)
    const [value, setValue]=useState(0)
    const [endpoint, setEndpoint]=useState('')
    const [endpoint1, setEndpoint1]=useState('')
    const [endpoint2, setEndpoint2]=useState('')
    const [methods, setMethods]=useState('')
    const [url, setUrl]=useState('')
    const [token, setToken]=useState('')
    const [data, setData]=useState(null)
    const [show, setShow]=useState(true)
    const [show1, setShow1]=useState(true)
    const [error, setError]=useState(null)

    const handleSubmit=async(e) => {
        e.preventDefault()

    const result=await fetch(`${url}/${endpoint}`,{
        method: `${methods}`,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    .then(res=> res.json())
    .then((result)=>result)
    .catch(error=> setError(error)) 
        setData({result})
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
                        <Typography variant='h3' style={{textAlign: 'center', fontSize: '35px', marginBottom: '40px'}}>
                            API testing
                        </Typography>
                    </header>
                <Container style={{maxWidth: '1200px', height: '660px'}}>
                <form onSubmit={handleSubmit}>
                    <Stack direction="row" spacing={2}>
                    <TextField 
                        style={{width: '155px', marginLeft: '170px'}}
                        select
                        label="Select methods"
                        id="outlined-select-options"
                        size='small'
                        value={methods}
                        onChange={(e) =>setMethods(e.target.value)}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.label} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        variant='outlined'
                        label="Enter URL API"
                        id='outlined-basic'
                        size='small'
                        value={url}
                        onChange={(e) =>setUrl(e.target.value)}
                        sx={{
                            width: 350,
                            maxWidth: '100%'
                        }}
                    >
                    </TextField>
                    <TextField 
                        style={{width: '200px'}}
                        select
                        label="Select music platform"
                        id="outlined-select-musicPlatform"
                        size='small'
                        defaultValue="youtube"
                        value={endpoint}
                        onChange={(e) => setEndpoint(e.target.value)}
                    >
                        {musicPlatform.map((music) => (
                            <MenuItem key={music.id} value={music.name}>
                                {music.name}
                            </MenuItem>
                        ))}
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
                        onChange={(newValue) =>{
                            setValue(newValue)
                        }}
                    >
                        <BottomNavigationAction label="Params" onClick={()=>setShow(!show)}/>
                        <BottomNavigationAction label="Authorization"onClick={() => setShow1(!show1)}/>
                    </BottomNavigation>
                    {!show ? (
                    <Stack direction="column" spacing={2}>
                    <TextField
                        style={{marginLeft: '170px'}}
                        variant='outlined'
                        label="Key"
                        id="outlined-basic" 
                        size='small'
                        value={endpoint1}
                        onChange={(e)=> setEndpoint1(e.target.value)}
                        sx={{
                            width: 250,
                            maxWidth: '100%'
                        }}
                    >
                    </TextField>
                    <TextField
                        style={{marginLeft: '170px'}}
                        variant='outlined'
                        label="Value"
                        id="outlined-basic" 
                        size='small'
                        margin='normal'
                        value={endpoint2}
                        onChange={(e)=> setEndpoint2(e.target.value)}
                        sx={{
                            width: 250,
                            maxWidth: '100%'
                        }}
                    >
                    </TextField>
                    </Stack>
                    ): null}
                    {!show1 ? (
                    <Stack>
                    <TextField
                        style={{marginLeft: '170px'}}
                        variant='outlined'
                        label="Token"
                        id="outlined-basic" 
                        size='small'
                        margin='normal'
                        value={token}
                        onChange={(e)=> setToken(e.target.value)}
                        sx={{
                            width: 350,
                            maxWidth: '100%'
                        }}
                    >
                    </TextField>
                    </Stack>
                    ): null}
                    <div>
                        {data ? (
                            <div><pre>{JSON.stringify(data,null,2)}</pre></div>
                        ): null}
                        {error && (
                            <div>{error.message}</div>
                        )}
                    </div>
                </Container>
            </div>
        </ThemeProvider>
    )
}

export default App
