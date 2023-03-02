import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch, FormControlLabel, BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Params from './Params';
import Authorization from './Authorization';
import axios from 'axios';
import Header from './Header';
import Form from './Form';



const App = () => {
    const [darkMode, setDarkMode]=useState(false)
    const [value, setValue]=useState(0)
    const [music, setMusic]=useState('')
    const [endpoint1, setEndpoint1]=useState('Type')
    const [endpoint2, setEndpoint2]=useState('')
    const [endpoint3, setEndpoint3]=useState('subType')
    const [endpoint4, setEndpoint4]=useState('')
    const [endpoint5, setEndpoint5]=useState('api')
    const [endpoint6, setEndpoint6]=useState('')
    const [endpoint7, setEndpoint7]=useState('q')
    const [endpoint8, setEndpoint8]=useState('')
    const [methods, setMethods]=useState('')
    const [url, setUrl]=useState('')
    const [token, setToken]=useState('')
    const [data, setData]=useState(null)
    const [show, setShow]=useState(true)
    const [show1, setShow1]=useState(true)
    const [show2, setShow2]=useState(true)
    const [error, setError]=useState(null)
    

    // const [selectedMethod, setSelectedMethod]=useState(null)
    
    
   
    const onClickGetPost=async() => {
        const response=await axios.get(`${url}/${music}`,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        .then(response=> response.data)
        .then(json=>json)
        .catch(error=> setError(error)) 
            setData({response})
    }
    
    const onClickCreatePost=async() => {
        const response1=await axios.post(`${url}/${music}`,{
                type: `${endpoint2}`,
                subType: `${endpoint4}`,
                api: `${endpoint6}`,
                params: {
                    q: `${endpoint8}`
                }
            },
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
    // const handleButtonClick=() => {
    //     if(selectedMethod==='get') {
    //         onClickGetPost()
    //     } else {
    //         onClickCreatePost()
    //     }
    // }
   
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
                <Container style={{maxWidth: '1200px', height: '660px'}}>
                <Form 
                    methods={methods} 
                    setMethods={setMethods}
                    url={url}
                    setUrl={setUrl}
                    music={music}
                    setMusic={setMusic}
                    onClickGetPost={onClickGetPost}
                    onClickCreatePost={onClickCreatePost}
                    // handleButtonClick={handleButtonClick}
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
                    </BottomNavigation>
                   <Params 
                        show={show} 
                        endpoint1={endpoint1} 
                        setEndpoint1={setEndpoint1} 
                        endpoint2={endpoint2} 
                        setEndpoint2={setEndpoint2}
                        endpoint3={endpoint3}
                        setEndpoint3={setEndpoint3}
                        endpoint4={endpoint4}
                        setEndpoint4={setEndpoint4}
                        endpoint5={endpoint5}
                        setEndpoint5={setEndpoint5}
                        endpoint6={endpoint6}
                        setEndpoint6={setEndpoint6}
                        endpoint7={endpoint7}
                        setEndpoint7={setEndpoint7}
                        endpoint8={endpoint8}
                        setEndpoint8={setEndpoint8}
                    />
                   <Authorization 
                        show1={show1} 
                        token={token} 
                        setToken={setToken}
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
