import React from 'react';
import { TextField, Stack, Grid } from '@mui/material';

const Params = ({
    show, 
    endpoint1, 
    setEndpoint1, 
    endpoint2, 
    setEndpoint2, 
    endpoint3, 
    setEndpoint3,
    endpoint4,
    setEndpoint4,
    endpoint5,
    setEndpoint5,
    endpoint6,
    setEndpoint6,
    endpoint7,
    setEndpoint7,
    endpoint8,
    setEndpoint8
}) => {
  return (
    <div>
       {!show ? (

            <Grid container spacing={1} >
                <Grid container direction="column" item xs={6} >
                <Stack spacing={2} style={{marginTop: '22px'}}>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Key"
                id="outlined-basic" 
                size='small'
                value={endpoint1}
                onChange={(e)=> setEndpoint1(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Key"
                id="outlined-basic" 
                size='small'
                value={endpoint3}
                onChange={(e)=> setEndpoint3(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Key"
                id="outlined-basic" 
                size='small'
                margin='normal' 
                value={endpoint5}
                onChange={(e)=> setEndpoint5(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Key"
                id="outlined-basic" 
                size='small'
                margin='normal'
                value={endpoint7}
                onChange={(e)=> setEndpoint7(e.target.value)}
            >
            </TextField>
            </Stack>
            </Grid>
            <Grid container direction="column" item xs={6}>
                <Stack spacing={2}>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Value"
                id="outlined-basic" 
                size='small'
                margin='normal'
                value={endpoint2}
                onChange={(e)=> setEndpoint2(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Value"
                id="outlined-basic" 
                size='small'
                margin='normal'
                value={endpoint4}
                onChange={(e)=> setEndpoint4(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Value"
                id="outlined-basic" 
                size='small'
                margin='normal'
                value={endpoint6}
                onChange={(e)=> setEndpoint6(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Value"
                id="outlined-basic" 
                size='small'
                margin='normal'
                value={endpoint8}
                onChange={(e)=> setEndpoint8(e.target.value)}
            >
            </TextField>
            </Stack>
            </Grid>
            </Grid>
            ): null}
    </div>
  )
}

export default Params
