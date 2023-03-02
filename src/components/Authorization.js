import React from 'react';
import { TextField, Stack } from '@mui/material';

const Authorization = ({show1, token, setToken}) => {
  return (
    <div>
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
    </div>
  )
}

export default Authorization
