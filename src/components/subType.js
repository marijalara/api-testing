import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import {musicPlatform} from "./Data";
import {infoService} from "./Data";

const SubType = ({selected, setSelected, music, info, selectedCategory}) => {
  const handleChange=(e) => {
      if(selectedCategory===music) {
        setSelected(e.target.value)
      } else if(selectedCategory===info) {
        setSelected(e.target.value)
      }
  }
  return (
    <div>
      <TextField 
        style={{width: '200px', justifyContent:'center'}}
        select
        label="Select subType"
        id="outlined-select"
        size='small'
        value={selected}
        onChange={handleChange}
        disabled={!selectedCategory}
      >
        {selectedCategory===music &&
          musicPlatform.map((music) => (   
            <MenuItem key={music.id} value={music.name}>
                {music.name}
            </MenuItem>
        ))}
        {selectedCategory===info && 
          infoService.map((info) => (
            <MenuItem key={info.id} value={info.name}>
                {info.name}
            </MenuItem>
            ))}
      </TextField>
    </div>
  )
}

export default SubType
