import React, {useState} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import Header from './Header';
import Form from './Form';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { Switch, FormControlLabel, BottomNavigation, BottomNavigationAction, Container} from '@mui/material';
import Authorization from './Authorization';
import BodyParams from './BodyParams';
import axios from 'axios';

const App: React.FC= () => {
    const [darkMode, setDarkMode]=useState<boolean>(false)
    const [value, setValue]=useState<number>(0) 
    const [selected, setSelected]=useState<string>('')
    const [selectedCategory, setSelectedCategory]=useState<string>('')
    const [data, setData]=useState<any>(null)
    const [token, setToken]=useState<string>('')
    const [error, setError]=useState<any>(null)
    const [show1, setShow1]=useState<boolean>(true)
    const [show2, setShow2]=useState<boolean>(true)
    const [endpoint8, setEndpoint8]=useState<string>('')
    const [endpoint10, setEndpoint10]=useState<string>('')
    const [endpoint3, setEndpoint3]=useState<string>('')
    const [endpoint, setEndpoint]=useState<string>('')
    const [endpoint1, setEndpoint1]=useState<string>('')
    const [endpoint2, setEndpoint2]=useState<string>('')
    const [endpoint4, setEndpoint4]=useState<string>('')
    const [endpoint5, setEndpoint5]=useState<string>('')
    const [endpoint6, setEndpoint6]=useState<string>('')
    const [endpoint7, setEndpoint7]=useState<string>('')
    const [endpoint9, setEndpoint9]=useState<string>('')
    const [endpoint11, setEndpoint11]=useState<string>('')
    const [endpoint12, setEndpoint12]=useState<string>('')
    const [endpoint13, setEndpoint13]=useState<string>('')
    const [apiValue1]=useState<string>('search')
    const [apiValue]=useState<string>('searchForAnItem')

    const url: string="https://connectic-plus.herokuapp.com" 
    const music: string='Music'
    const info: string='Info'

    const handleClickPost=async() => {
        let params: {
            type: string;
            subType: string;
            api?: string;
            params?: {
                q?: string | null | undefined;
                regionCode?: string | null | undefined;
                maxResults?: string | null | undefined;
                type?: string | null | undefined;
                limit?: string | null | undefined;
                include_external?: string | null | undefined;
                strict?: string | null | undefined;
                order?: string | null | undefined;
                term?: string | null | undefined;
                locale?: string | null | undefined;
            }
        }={
            type: 'music',
            subType: `${selected}`
        }
        if(selected==='youtube' && selectedCategory===music) {
            params={...params, api: `${apiValue1}`, params:{ q: `${endpoint8}`, regionCode: `${endpoint}`, maxResults: `${endpoint1}`, type: `${endpoint2}` }}
        } else if(selected==='spotify' && selectedCategory===music) {
            params={...params, api: `${apiValue}`, params:{ q: `${endpoint8}`, type: `${endpoint10}`, limit: `${endpoint9}`, include_external: `${endpoint11}`} }
        } else if(selected==='deezer' && selectedCategory===music) {
            params={...params, api: `${apiValue1}`, params: {q: `${endpoint8}`, strict: `${endpoint4}`, order: `${endpoint5}` }}
        } else if(selected==='shazam' && selectedCategory===music) {
            params={...params, api: `${apiValue1}`, params: {term: `${endpoint3}`, locale: `${endpoint6}`, limit: `${endpoint7}`}}
        }

        for(const [key, value] of Object.entries(params.params ?? {})) {
            if(value===null || value===undefined || value==='') {
                delete params.params![key as keyof typeof params.params]
            }
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
            setData(response)
    }

    const handleClickFiJ=async() => {
        let params: {
            type: string;
            subType: string;
            api?: string;
            params?: {
                limit: string
            }
        }={
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
            setData(response1)
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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <FormControlLabel 
                value="end"
                control={<Switch color='primary' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
                label="Dark Mode"
                labelPlacement='end'
            />
        <div className='app'>
            <Header />
            <Container style={{maxWidth: '1000px'}}>
            <Form 
                selected={selected}
                setSelected={setSelected}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                music={music}
                info={info}
                handleClick={handleClick}
            />
            <BottomNavigation
                value={value}
                showLabels
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction label="Authorization" onClick={() => setShow1(!show1)} />
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
                    <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
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