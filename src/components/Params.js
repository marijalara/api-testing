import React from 'react';
import { TextField, Stack, Grid } from '@mui/material';

const Params = ({
    show,
    apiValue1,
    selected,
    music,
    apiValue
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
                    id="outlined-read-only-input"
                    size='small'
                    defaultValue="Type"
                    InputProps={{
                        readOnly: true
                    }}
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
                        id="outlined-read-only-input"
                        size='small'
                        defaultValue="subType"
                        InputProps={{
                            readOnly: true
                        }}
                    >
                    </TextField>
                    <TextField
                        style={{marginLeft: '170px'}}
                        variant='outlined'
                        label="Key"
                        id="outlined-read-only-input"
                        size='small'
                        margin='normal' 
                        defaultValue="api"
                        InputProps={{
                            readOnly: true
                        }}
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
                        value={apiValue1}
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
                        id="outlined-read-only-input"
                        size='small'
                        defaultValue="subType"
                        InputProps={{
                            readOnly: true
                        }}
                    >
                    </TextField>
                    <TextField
                        style={{marginLeft: '170px'}}
                        variant='outlined'
                        label="Key"
                        id="outlined-read-only-input"
                        size='small'
                        margin='normal' 
                        defaultValue="api"
                        InputProps={{
                            readOnly: true
                        }}
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
                        value={apiValue}
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
                        id="outlined-read-only-input"
                        size='small'
                        defaultValue="subType"
                        InputProps={{
                            readOnly: true
                        }}
                    >
                    </TextField>
                    <TextField
                        style={{marginLeft: '170px'}}
                        variant='outlined'
                        label="Key"
                        id="outlined-read-only-input"
                        size='small'
                        margin='normal' 
                        defaultValue="api"
                        InputProps={{
                            readOnly: true
                        }}
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
                        value={apiValue1}
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
