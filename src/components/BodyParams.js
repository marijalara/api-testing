import React from 'react';
import { TextField, Stack, Grid, Typography } from '@mui/material';

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
            <Stack spacing={1} style={{marginTop: '23px'}}>
            <Typography
                variant='body1' 
                style={{marginTop: '24px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
            >
                q:
            </Typography>
            <Typography
                variant='body1' 
                style={{ marginTop: '54px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
            >
                regionCode:
            </Typography>
            <Typography
                variant='body1' 
                style={{ marginTop: '50px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
            >
                maxResults:
            </Typography>
            <Typography
                variant='body1' 
                style={{ marginTop: '48px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
            >
                type:
            </Typography>
            </Stack>
            </Grid>
            <Grid container direction="column" item xs={6}>
            <Stack spacing={1} style={{marginTop: '22px'}}>
            <TextField
                style={{ width: '60%'}}
                variant='outlined'
                label="Value"
                id="outlined-basic-q" 
                size='small'
                margin='normal'
                helperText="Example: Adele easy on me"
                value={endpoint8}
                onChange={(e)=> setEndpoint8(e.target.value)}
            >
            </TextField>
            <TextField
                style={{ width: '60%'}}
                variant='outlined'
                label="Value"
                id="outlined-basic-regionCode" 
                size='small'
                margin='normal'
                helperText="Example: US, RS"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
            >
            </TextField>
            <TextField
                style={{width: '60%'}}
                variant='outlined'
                label="Value"
                id="outlined-basic-maxResults" 
                size='small'
                margin='normal'
                helperText="Example: 5"
                value={endpoint1}
                onChange={(e) =>setEndpoint1(e.target.value)}
            >
            </TextField>
            <TextField
                style={{width: '60%'}}
                variant='outlined'
                label="Value"
                id="outlined-basic-type" 
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
                <Stack spacing={1} style={{marginTop: '23px'}}>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '24px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    q:
                </Typography>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '54px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    strict:
                </Typography>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '68px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    order:
                </Typography>
                </Stack>
                </Grid>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={1} style={{marginTop: '22px'}}>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-q1" 
                    size='small'
                    margin='normal'
                    helperText="Example: Adele easy on me"
                    value={endpoint8}
                    onChange={(e)=> setEndpoint8(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-strict" 
                    size='small'
                    margin='normal'
                    helperText="Example: Disable the fuzzy mode (?strict=on)"
                    value={endpoint4}
                    onChange={(e) => setEndpoint4(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-order" 
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
                <Stack spacing={5} style={{marginTop: '22px'}}>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '24px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    q:
                </Typography>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '54px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    type:
                </Typography>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '50px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    limit:
                </Typography>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '48px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    include_external:
                </Typography>
                </Stack>
                </Grid>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={1} style={{marginTop: '22px'}}>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-q2" 
                    size='small'
                    margin='normal'
                    helperText="Example: Search query keywords"
                    value={endpoint8}
                    onChange={(e)=> setEndpoint8(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-type1" 
                    size='small'
                    margin='normal'
                    helperText="Example: track, album"
                    value={endpoint10}
                    onChange={(e)=> setEndpoint10(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-limit" 
                    size='small'
                    margin='normal'
                    helperText="Example: Min number of results is 1, max 50"
                    value={endpoint9}
                    onChange={(e) => setEndpoint9(e.target.value)}
                >
                </TextField>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-include_external" 
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
                <Typography
                    variant='body1' 
                    style={{ marginTop: '24px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    term:
                </Typography>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '54px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    locale:
                </Typography>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '48px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    limit:
                </Typography>
                </Stack>
                </Grid>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={1} style={{marginTop: '22px'}}>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-term" 
                    size='small'
                    margin='normal'
                    helperText="Example: Full name of songs or artists"
                    value={endpoint3}
                    onChange={(e)=> setEndpoint3(e.target.value)}
                >
                </TextField> 
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-locale" 
                    size='small'
                    margin='normal'
                    helperText="Example: en-US, sr-RS"
                    value={endpoint6}
                    onChange={(e) => setEndpoint6(e.target.value)}
                >
                </TextField> 
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-limit1" 
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
            {selected==='facts' ? (
                <>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={5} style={{marginTop: '23px'}}>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '24px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    limit:
                </Typography>
                </Stack>
                </Grid>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={2} style={{marginTop: '22px'}}>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-limit3" 
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
            {selected==='jokes' ? (
                <>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={5} style={{marginTop: '23px'}}>
                <Typography
                    variant='body1' 
                    style={{ marginTop: '24px', justifyContent: 'right', textAlign: 'right', marginRight: '40px'}}
                >
                    limit:
                </Typography>
                </Stack>
                </Grid>
                <Grid container direction="column" item xs={6}>
                <Stack spacing={2} style={{marginTop: '22px'}}>
                <TextField
                    style={{width: '60%'}}
                    variant='outlined'
                    label="Value"
                    id="outlined-basic-limit4" 
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