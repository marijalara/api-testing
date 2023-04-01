import React from 'react';
import { TextField, MenuItem } from '@mui/material';

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

const MusicPlatform = ({selected, setSelected,selectedCategory}) => {
  return (
    <div>
       <TextField 
            style={{width: '200px', justifyContent:'center'}}
            select
            label="Select subType"
            id="outlined-select-musicPlatform"
            size='small'
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            disabled={!selectedCategory}
        >
            {musicPlatform.map((music) => (   
                <MenuItem key={music.id} value={music.name}>
                    {music.name}
                </MenuItem>
            ))}
        </TextField>
    </div>
  )
}

export default MusicPlatform
