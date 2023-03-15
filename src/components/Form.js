import React from 'react';
import { TextField, Stack, Button, MenuItem } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Categories from './Categories';

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

const Form = ({selected, setSelected, handleClickPost}) => {

    const handleSubmit=(e) => {
        e.preventDefault()
    }
    
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
            {/* <TextField 
                style={{width: '155px', marginLeft: '170px'}}
                label="Method"
                id="outlined-select-options"
                size='small'
                value={method}
            >    
            </TextField> */}
            {/* <TextField
                variant='outlined'
                label="Enter URL API"
                id='outlined-basic'
                size='small'
                value={url}
                sx={{
                    width: 350,
                    maxWidth: '100%'
                }}
            >
            </TextField> */}
            <Categories />
            <TextField 
            style={{width: '200px', justifyContent:'center'}}
            select
            label="Select music platform"
            id="outlined-select-musicPlatform"
            size='small'
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
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
