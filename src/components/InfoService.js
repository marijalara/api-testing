import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const infoService=[
  {
    id: 5,
    name: 'facts'
  },
  {
    id: 6,
    name: 'jokes'
  }
]

const InfoService = ({selected1, setSelected1}) => {
  return (
    <div>
      <TextField
        style={{justifyContent: 'center'}}
        variant='outlined'
        label="Select a info"
        id='outlined-basic'
        size='small'
        select
        value={selected1}
        onChange={(e) => setSelected1(e.target.value)}
        sx={{
            width: 150,
            maxWidth: '100%'
        }}
      >
        {infoService.map((info) => (
                <MenuItem key={info.id} value={info.name}>
                    {info.name}
                </MenuItem>
            ))}
      </TextField>
    </div>
  )
}

export default InfoService
