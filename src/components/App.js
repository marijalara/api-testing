import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch, FormControlLabel, BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Authorization from './Authorization';
import axios from 'axios';
import Header from './Header';
import Form from './Form';
import BodyParams from './BodyParams';

const App = () => {
    const [darkMode, setDarkMode]=useState(false)
    const [value, setValue]=useState(0)
    const [apiValue1, setApiValue1]=useState('search')
    const [apiValue, setApiValue]=useState('searchForAnItem')
    const [endpoint8, setEndpoint8]=useState('')
    const [endpoint10, setEndpoint10]=useState('')
    const [endpoint3, setEndpoint3]=useState('')
    const [token, setToken]=useState('')
    const [data, setData]=useState(null)
    const [show1, setShow1]=useState(true)
    const [show2, setShow2]=useState(true)
    const [error, setError]=useState(null)
    const [selected, setSelected]=useState('')
    const [endpoint, setEndpoint]=useState('RS')
    const [endpoint1, setEndpoint1]=useState('5')
    const [endpoint2, setEndpoint2]=useState('video')
    const [endpoint4, setEndpoint4]=useState('(?strict=on)')
    const [endpoint5, setEndpoint5]=useState('TRACK_ASC')
    const [endpoint6, setEndpoint6]=useState('sr-RS')
    const [endpoint7, setEndpoint7]=useState('5')
    const [endpoint9, setEndpoint9]=useState('20')
    const [endpoint11, setEndpoint11]=useState('audio')
    const [endpoint12, setEndpoint12]=useState('')
    const [endpoint13, setEndpoint13]=useState('')
    const [selectedCategory, setSelectedCategory]=useState('')

    const url="https://connectic-plus.herokuapp.com"
    const method='POST'
    const music='Music'
    const info='Info'
    
    const handleClickPost=async() => {
        let params={
            type: 'music',
            subType: `${selected}`
        }
        
        if(selected==='youtube' && selectedCategory===music) {
            params={...params, api: `${apiValue1}`, params:{ q: `${endpoint8}`, regionCode: `${endpoint}`, maxResults: `${endpoint1}`, type: `${endpoint2}` }}
        } else if(selected==='spotify' && selectedCategory===music) {
            params={...params, api: `${apiValue}`, params:{ q: `${endpoint8}`, type: `${endpoint10}`} }
        } else if(selected==='deezer' && selectedCategory===music) {
            params={...params, api: `${apiValue1}`, params: {q: `${endpoint8}`, strict: `${endpoint4}`, order: `${endpoint5}` }}
        } else if(selected==='shazam' && selectedCategory===music) {
            params={...params, api: `${apiValue1}`, params: {term: `${endpoint3}`, locale: `${endpoint6}`, limit: `${endpoint7}`}}
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

    const handleClickFiJ=async() => {
        let params={
            type: 'info',
            subType: 'factsjokes'
        }
        if(selected==='facts' && selectedCategory===info) {
            params={...params, api: `${selected}`, params: {limit:`${endpoint12}`}}
        } else if(selected==='jokes' && selectedCategory===info) {
            params={...params, api: `${selected}`, params: {limit: `${endpoint13}` }}
        }
        const response1=await axios.post(`${url}/factsjokes`,params,
            {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        } 
        )
        .then(response1 => response1.data)
        .then(json =>json)
        .catch(error=> setError(error))
            setData({response1})
    }

    const handleClick=() => {
        if(selectedCategory===music) {
            handleClickPost()
        } else if(selectedCategory===info) {
            handleClickFiJ()
        }
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
                <Container style={{maxWidth: '1200px'}}>
                <Form 
                    method={method} 
                    url={url}
                    handleClickPost={handleClickPost}
                    selected={selected}
                    setSelected={setSelected}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    setData={setData}
                    token={token}
                    setError={setError}
                    handleClick={handleClick}
                    music={music}
                    info={info}
                />
                    <BottomNavigation
                        value={value}
                        showLabels
                        onChange={(event, newValue) =>{
                            setValue(newValue)
                        }}
                    >
                        <BottomNavigationAction label="Authorization"onClick={() => setShow1(!show1)}/>
                        <BottomNavigationAction label="Body Params" onClick={() =>setShow2(!show2)} />
                    </BottomNavigation>
                   <Authorization 
                        show1={show1} 
                        token={token} 
                        setToken={setToken}
                    />
                    <BodyParams 
                        show2={show2}
                        selected={selected}
                        endpoint8={endpoint8}
                        setEndpoint8={setEndpoint8}
                        endpoint10={endpoint10}
                        setEndpoint10={setEndpoint10}
                        endpoint3={endpoint3}
                        setEndpoint3={setEndpoint3}
                        endpoint={endpoint}
                        setEndpoint={setEndpoint}
                        endpoint1={endpoint1}
                        setEndpoint1={setEndpoint1}
                        endpoint2={endpoint2}
                        setEndpoint2={setEndpoint2}
                        endpoint4={endpoint4}
                        setEndpoint4={setEndpoint4}
                        endpoint5={endpoint5}
                        setEndpoint5={setEndpoint5}
                        endpoint6={endpoint6}
                        setEndpoint6={setEndpoint6}
                        endpoint7={endpoint7}
                        setEndpoint7={setEndpoint7}
                        endpoint9={endpoint9}
                        setEndpoint9={setEndpoint9}
                        endpoint11={endpoint11}
                        setEndpoint11={setEndpoint11}
                        endpoint12={endpoint12}
                        setEndpoint12={setEndpoint12}
                        endpoint13={endpoint13}
                        setEndpoint13={setEndpoint13}
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
