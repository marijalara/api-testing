import React from 'react';
import { TextField, Stack, Grid } from '@mui/material';

const BodyParams = ({
    show2, 
    selected, 
    endpoint8, 
    setEndpoint8,
    endpoint10,
    setEndpoint10,
    endpoint3,
    setEndpoint3,
    endpoint,
    setEndpoint,
    endpoint1,
    setEndpoint1,
    endpoint2,
    setEndpoint2,
    endpoint4,
    setEndpoint4,
    endpoint5,
    setEndpoint5,
    endpoint6,
    setEndpoint6,
    endpoint7,
    setEndpoint7,
    endpoint9,
    setEndpoint9,
    endpoint11,
    setEndpoint11,
    selected1,
    endpoint12,
    setEndpoint12,
    endpoint13,
    setEndpoint13
}) => {
  return (
    <div>
        {!show2 ? (
            <Grid container spacing={1} >
                {selected==='youtube' ?(
                <>
            <Grid container direction="column" item xs={6} >
            <Stack spacing={4} style={{marginTop: '23px'}}>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Key"
                id="outlined-read-only-input" 
                size='small'
                margin='normal'
                defaultValue="q"
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
                defaultValue="regionCode"
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
                defaultValue="maxResults"
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
                defaultValue="type"
                InputProps={{
                    readOnly: true
                }}
            >
            </TextField>
            </Stack>
            </Grid>
            <Grid container direction="column" item xs={6}>
            <Stack spacing={1} style={{marginTop: '22px'}}>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Value"
                id="outlined-basic" 
                size='small'
                margin='normal'
                helperText="Example: Adele easy on me"
                value={endpoint8}
                onChange={(e)=> setEndpoint8(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Value"
                id="outlined-basic" 
                size='small'
                margin='normal'
                helperText="Example: US"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Value"
                id="outlined-basic" 
                size='small'
                margin='normal'
                helperText="Example: 5"
                value={endpoint1}
                onChange={(e) =>setEndpoint1(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Value"
                id="outlined-basic" 
                size='small'
                margin='normal'
                helperText="Example: video, playlist, channel"
                value={endpoint2}
                onChange={(e) => setEndpoint2(e.target.value)}
            >
            </TextField>
            </Stack>
            </Grid>
                </>
            ): null}
            {selected ==='deezer' ? (
                <>
                <Grid container direction="column" item xs={6} >
                <Stack spacing={5} style={{marginTop: '23px'}}>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-read-only-input" 
                    size='small'
                    margin='normal'
                    defaultValue="q"
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
                    defaultValue="strict"
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
                    defaultValue="order"
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
                    helperText="Example: Adele easy on me"
                    value={endpoint8}
                    onChange={(e)=> setEndpoint8(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    helperText="Example: Disable the fuzzy mode (?strict=on)"
                    value={endpoint4}
                    onChange={(e) => setEndpoint4(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    helperText="Example: TRACK_ASC, TRACK_DESC,ARTIST_ASC, ARTIST_DESC"
                    value={endpoint5}
                    onChange={(e) => setEndpoint5(e.target.value)}
                >
                </TextField>
                </Stack>
                </Grid>
                
                </>
            ): null}
            {selected==='spotify' ? (
                <>
                <Grid container direction="column" item xs={6} >
                <Stack spacing={5} style={{marginTop: '24px'}}>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-read-only-input" 
                    size='small'
                    margin='normal'
                    defaultValue="q"
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
                    defaultValue="type"
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
                    defaultValue="limit"
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
                    defaultValue="include_external"
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
                    helperText="Example: Search query keywords"
                    value={endpoint8}
                    onChange={(e)=> setEndpoint8(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    helperText="Example: track, album"
                    value={endpoint10}
                    onChange={(e)=> setEndpoint10(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    helperText="Example: Min number of results"
                    value={endpoint9}
                    onChange={(e) => setEndpoint9(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    helperText="Example: Possible values: audio"
                    value={endpoint11}
                    onChange={(e) => setEndpoint11(e.target.value)}
                >
                </TextField>
                </Stack>
                </Grid>
                </>
            ): null}
            {selected==='shazam' ? (
                <>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={5} style={{marginTop: '23px'}}>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-read-only-input" 
                    size='small'
                    margin='normal'
                    defaultValue="term"
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
                    defaultValue="locale"
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
                    defaultValue="limit"
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
                    helperText="Example: Full name of songs or artists"
                    value={endpoint3}
                    onChange={(e)=> setEndpoint3(e.target.value)}
                >
                </TextField> 
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    helperText="Example: en-US"
                    value={endpoint6}
                    onChange={(e) => setEndpoint6(e.target.value)}
                >
                </TextField> 
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    helperText="Example: Maximum fixed at 5"
                    value={endpoint7}
                    onChange={(e) => setEndpoint7(e.target.value)}
                >
                </TextField> 
                </Stack>
                </Grid>
                </>
            ):null}
            {selected1==='facts' ? (
                <>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={5} style={{marginTop: '23px'}}>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-read-only-input" 
                    size='small'
                    margin='normal'
                    defaultValue="limit"
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
                    helperText="Example: Must be between 1 and 30"
                    value={endpoint12}
                    onChange={(e) => setEndpoint12(e.target.value)}
                >
                </TextField> 
                </Stack>
                </Grid>
                </>
            ): null}
            {selected1==='jokes' ? (
                <>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={5} style={{marginTop: '23px'}}>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-read-only-input" 
                    size='small'
                    margin='normal'
                    defaultValue="limit"
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
                    helperText="Example: Must be between 1 and 30"
                    value={endpoint13}
                    onChange={(e) => setEndpoint13(e.target.value)}
                >
                </TextField> 
                </Stack>
                </Grid>
                </>
                ): null}
            </Grid>
        ): null}
    </div>
  )
}

export default BodyParams
