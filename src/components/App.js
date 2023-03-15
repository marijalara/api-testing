import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch, FormControlLabel, BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Params from './Params';
import Authorization from './Authorization';
import axios from 'axios';
import Header from './Header';
import Form from './Form';
import BodyParams from './BodyParams';

const App = () => {
    const [darkMode, setDarkMode]=useState(false)
    const [value, setValue]=useState(0)
    const [endpoint3, setEndpoint3]=useState('subType')
    const [endpoint5, setEndpoint5]=useState('api')

    const [endpoint6, setEndpoint6]=useState('')

    const [endpoint7, setEndpoint7]=useState('q')
    const [endpoint8, setEndpoint8]=useState('')
    const [endpoint9, setEndpoint9]=useState('type')
    const [endpoint10, setEndpoint10]=useState('')
    const [endpoint11, setEndpoint11]=useState('term')
    const [endpoint12, setEndpoint12]=useState('')
    const [token, setToken]=useState('')
    const [data, setData]=useState(null)
    const [show, setShow]=useState(true)
    const [show1, setShow1]=useState(true)
    const [show2, setShow2]=useState(true)
    const [error, setError]=useState(null)
    const [selected, setSelected]=useState('')
    const [endpoint, setEndpoint]=useState('RS')
    const [endpoint1, setEndpoint1]=useState('5')
    const [endpoint2, setEndpoint2]=useState('video')
    const [endpoint4, setEndpoint4]=useState('(?strict=on)')
    const [endpoint13, setEndpoint13]=useState('TRACK_ASC')
    const [endpoint14, setEndpoint14]=useState('sr-RS')
    const [endpoint15, setEndpoint15]=useState('5')
    const [endpoint16, setEndpoint16]=useState('50')
    const [endpoint17, setEndpoint17]=useState('audio')
    

    const url="https://connectic-plus.herokuapp.com"
    const method='POST'
    const type='Type'
    const music='Music'
    
    const handleClickPost=async() => {
        
        let params={
            type: 'music',
            subType: `${selected}`,
            api: `${endpoint6}`
        }
        
        if(selected==='youtube') {
            params={...params, params:{ q: `${endpoint8}`, regionCode: `${endpoint}`, maxResults: `${endpoint1}`, type: `${endpoint2}` }}
        } else if(selected==='spotify') {
            params={...params, params:{ q: `${endpoint8}`, type: `${endpoint10}`} }
        } else if(selected==='deezer') {
            params={...params, params: {q: `${endpoint8}`, strict: `${endpoint4}`, order: `${endpoint13}` }}
        } else if(selected==='shazam') {
            params={...params, params: {term: `${endpoint12}`, locale: `${endpoint14}`, limit: `${endpoint15}`}}
        }
        const response=await axios.post(`${url}/${selected}`,params,
            {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        } 
        )
        .then(response => response.data)
        .then(json =>json)
        .catch(error=> setError(error))
            setData({response})
    }
  
    const theme= createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light'
        }
    })

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline maxWidth="lg"/>
            <FormControlLabel  
                value="end"
                control={<Switch color="primary" checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>}
                label="Dark Mode"
                labelPlacement="end"
            />
            <div className='app'>
                <Header />
                <Container style={{maxWidth: '1000px', height: '660px'}}>
                <Form 
                    method={method} 
                    url={url}
                    handleClickPost={handleClickPost}
                    selected={selected}
                    setSelected={setSelected}
                />
                    <BottomNavigation
                        value={value}
                        showLabels
                        onChange={(newValue) =>{
                            setValue(newValue)
                        }}
                    >
                        <BottomNavigationAction label="Params" onClick={()=>setShow(!show)}/>
                        <BottomNavigationAction label="Authorization"onClick={() => setShow1(!show1)}/>
                        <BottomNavigationAction label="Body Params" onClick={() =>setShow2(!show2)} />
                    </BottomNavigation>
                   <Params 
                        show={show} 
                        type={type}
                        music={music}
                        selected={selected}
                        endpoint3={endpoint3}
                        setEndpoint3={setEndpoint3}
                        endpoint5={endpoint5}
                        setEndpoint5={setEndpoint5}
                        endpoint6={endpoint6}
                        setEndpoint6={setEndpoint6}
                    />
                   <Authorization 
                        show1={show1} 
                        token={token} 
                        setToken={setToken}
                    />
                    <BodyParams 
                        show2={show2}
                        selected={selected}
                        endpoint7={endpoint7}
                        setEndpoint7={setEndpoint7}
                        endpoint8={endpoint8}
                        setEndpoint8={setEndpoint8}
                        endpoint9={endpoint9}
                        setEndpoint9={setEndpoint9}
                        endpoint10={endpoint10}
                        setEndpoint10={setEndpoint10}
                        endpoint11={endpoint11}
                        setEndpoint11={setEndpoint11}
                        endpoint12={endpoint12}
                        setEndpoint12={setEndpoint12}
                        endpoint={endpoint}
                        setEndpoint={setEndpoint}
                        endpoint1={endpoint1}
                        setEndpoint1={setEndpoint1}
                        endpoint2={endpoint2}
                        setEndpoint2={setEndpoint2}
                        endpoint4={endpoint4}
                        setEndpoint4={setEndpoint4}
                        endpoint13={endpoint13}
                        setEndpoint13={setEndpoint13}
                        endpoint14={endpoint14}
                        setEndpoint14={setEndpoint14}
                        endpoint15={endpoint15}
                        setEndpoint15={setEndpoint15}
                        endpoint16={endpoint16}
                        setEndpoint16={setEndpoint16}
                        endpoint17={endpoint17}
                        setEndpoint17={setEndpoint17}
                    />
                    <div>
                        {data ? (
                            <div><pre>{JSON.stringify(data,null,2)}</pre></div>
                        ): null}
                        {error && (
                            <div>{error.message}</div>
                        )}
                    </div>
                </Container>
            </div>
        </ThemeProvider>
    )
}

export default App
