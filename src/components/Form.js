import React from 'react';
import { TextField, Stack, Button, MenuItem } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// const options=[
//     {
//         value: 'GET',
//         label: 'GET'
//     },
//     {
//         value: 'PUT',
//         label: 'PUT'
//     },
//     {
//         value: 'POST',
//         label: 'POST'
//     },
//     {
//         value: 'PATCH',
//         label: 'PATCH'
//     },
//     {
//         value: 'DELETE',
//         label: 'DELETE'
//     }
// ]

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
    },
    {
        id: 4,
        name: 'shazam'
    }
]

const Form = ({methods,setMethods, url, setUrl, music, setMusic, handleClickPost}) => {

    const handleSubmit=(e) => {
        e.preventDefault()
    }
    
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
            <TextField 
                style={{width: '155px', marginLeft: '170px'}}
                
                label="Methods"
                id="outlined-select-options"
                size='small'
                value={methods}
                onChange={(e) =>setMethods(e.target.value)}
            >
                {/* {options.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))} */}
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
            value={music}
            onChange={(e) => setMusic(e.target.value)}
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
                onClick={handleClickPost}
            >
                Send
            </Button>
            </Stack>
        </form>
    </div>
  )
}

export default Form
