import React from 'react';
import { TextField, Stack, Grid } from '@mui/material';

const BodyParams = ({
    show2, 
    selected, 
    endpoint7, 
    setEndpoint7,
    endpoint8, 
    setEndpoint8,
    endpoint9,
    setEndpoint9,
    endpoint10,
    setEndpoint10,
    endpoint11,
    setEndpoint11,
    endpoint12,
    setEndpoint12,
    endpoint,
    setEndpoint,
    endpoint1,
    setEndpoint1,
    endpoint2,
    setEndpoint2,
    endpoint4,
    setEndpoint4,
    endpoint13,
    setEndpoint13,
    endpoint14,
    setEndpoint14,
    endpoint15,
    setEndpoint15,
    endpoint16,
    setEndpoint16,
    endpoint17,
    setEndpoint17
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
                id="outlined-basic" 
                size='small'
                margin='normal'
                value={endpoint7}
                onChange={(e)=> setEndpoint7(e.target.value)}
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Key"
                id="outlined-basic" 
                size='small'
                margin='normal'
                defaultValue="regionCode"
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Key"
                id="outlined-basic" 
                size='small'
                margin='normal'
                defaultValue="maxResults"
            >
            </TextField>
            <TextField
                style={{marginLeft: '170px'}}
                variant='outlined'
                label="Key"
                id="outlined-basic" 
                size='small'
                margin='normal'
                defaultValue="type"
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
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    value={endpoint7}
                    onChange={(e)=> setEndpoint7(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    defaultValue="strict"
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    defaultValue="order"
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
                    value={endpoint13}
                    onChange={(e) => setEndpoint13(e.target.value)}
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
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    value={endpoint7}
                    // onChange={(e)=> setEndpoint7(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    value={endpoint9}
                    // onChange={(e)=> setEndpoint9(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    defaultValue="limit"
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    defaultValue="include_external"
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
                    helperText="Example: Maximum nuber of results"
                    value={endpoint16}
                    onChange={(e) => setEndpoint16(e.target.value)}
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
                    value={endpoint17}
                    onChange={(e) => setEndpoint17(e.target.value)}
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
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    value={endpoint11}
                    onChange={(e)=> setEndpoint11(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    defaultValue="locale"
                >
                </TextField>
                <TextField
                    style={{marginLeft: '170px'}}
                    variant='outlined'
                    label="Key"
                    id="outlined-basic" 
                    size='small'
                    margin='normal'
                    defaultValue="limit"
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
                    value={endpoint12}
                    onChange={(e)=> setEndpoint12(e.target.value)}
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
                    value={endpoint14}
                    onChange={(e) => setEndpoint14(e.target.value)}
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
                    value={endpoint15}
                    onChange={(e) => setEndpoint15(e.target.value)}
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

export default BodyParams
