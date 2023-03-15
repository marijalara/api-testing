import React from 'react';
import { TextField, Stack, Grid } from '@mui/material';

const Params = ({
    show,
    endpoint3, 
    setEndpoint3,
    endpoint5,
    setEndpoint5,
    endpoint6,
    setEndpoint6,
    selected,
    type,
    music,
    apiParams,
    nesto
    
}) => {
  return (
    <div>
       {!show ? (
            <Grid container spacing={1} >
                <Grid container direction="column" item xs={6} >
                <Stack spacing={2} style={{marginTop: '36px'}}>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-basic" 
                    size='small'
                    value={type}
                >
                </TextField>
                </Stack>
                </Grid>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={2} style={{marginTop: '22px'}}>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    value={music}
                >
                </TextField>
                </Stack>
                </Grid>
                {selected==='youtube' || selected==='deezer' ? (
                    <>
                    <Grid container direction="column" item xs={6}>
                    <Stack spacing={3} style={{marginTop: '35px'}}>
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
                    </Stack>
                    </Grid>
                    <Grid container direction="column" item xs={6}>
                    <Stack spacing={2} style={{marginTop: '18px'}}>
                    <TextField
                        style={{marginLeft: '170px'}}
                        variant='outlined'
                        label="Value"
                        id="outlined-basic" 
                        size='small'
                        margin='normal'
                        value={selected}
                        // onChange={(e)=> setEndpoint4(e.target.value)}
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
                    </Stack>
                    </Grid>
                    </>
                ): null}
                {selected==='spotify' ? (
                    <>
                    <Grid container direction="column" item xs={6}>
                    <Stack spacing={3} style={{marginTop: '35px'}}>
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
                    </Stack>
                    </Grid>
                    <Grid container direction="column" item xs={6}>
                    <Stack spacing={2} style={{marginTop: '18px'}}>
                    <TextField
                        style={{marginLeft: '170px'}}
                        variant='outlined'
                        label="Value"
                        id="outlined-basic" 
                        size='small'
                        margin='normal'
                        value={selected}
                        
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
                    </Stack>
                    </Grid>
                    </>
                ): null}   
                {selected==='shazam' ? (
                    <>
                    <Grid container direction="column" item xs={6}>
                    <Stack spacing={3} style={{marginTop: '35px'}}>
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
                    </Stack>
                    </Grid>
                    <Grid container direction="column" item xs={6}>
                    <Stack spacing={2} style={{marginTop: '18px'}}>
                    <TextField
                        style={{marginLeft: '170px'}}
                        variant='outlined'
                        label="Value"
                        id="outlined-basic" 
                        size='small'
                        margin='normal'
                        value={selected}
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
                    </Stack>
                    </Grid>
                    </>
                ):null}     
            </Grid>
        ): null}
    </div>
  )
}

export default Params
