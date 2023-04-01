import React from 'react';
import { Stack, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Categories from './Categories';
import InfoService from './InfoService';
import MusicPlatform from './MusicPlatform';
import SubType from './subType';


const Form = ({selected,music, info, handleClick, selectedCategory, selected1, setSelected1, setSelected, setSelectedCategory}) => {

    const handleSubmit=(e) => {
        e.preventDefault()
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            {/* <SubType 
                selectedCategory={selectedCategory}
                music={music}
                info={info}
                selected={selected} 
                setSelected={setSelected}
                selected1={selected1} 
                setSelectedCategory={setSelectedCategory} 
                setSelected1={setSelected1}
            /> */}
            {selectedCategory===music ? (
            <MusicPlatform 
                selected={selected} 
                setSelected={setSelected}
                selectedCategory={selectedCategory}
                music={music}
            />
            ): null}
            {selectedCategory==info ? (
            <InfoService 
                selected1={selected1} 
                setSelectedCategory={setSelectedCategory} 
                setSelected1={setSelected1}
            />
            ): null}
            <Button 
                variant='contained'
                type='submit'
                size="medium"
                endIcon={<SendIcon />}
                onClick={handleClick}
            >
                Send
            </Button>
            </Stack>
        </form>
    </div>
  )
}

export default Form
