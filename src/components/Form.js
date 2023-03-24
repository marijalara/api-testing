import React from 'react';
import { TextField, Stack, Button, MenuItem } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Categories from './Categories';
import InfoService from './InfoService';

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

const Form = ({selected, handleClick, selectedCategory, selected1, setSelected1, setSelected, setSelectedCategory}) => {

    const handleSubmit=(e) => {
        e.preventDefault()
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
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
            <InfoService selected1={selected1} setSelectedCategory={setSelectedCategory} setSelected1={setSelected1}/>
            <Button 
                variant='contained'
                type='submit'
                size="medium"
                endIcon={<SendIcon />}
                onClick={handleClick}
            >
                Send
            </Button>
            </Stack>
        </form>
    </div>
  )
}

export default Form
