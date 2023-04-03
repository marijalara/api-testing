import React from 'react';
import { Stack, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Categories from './Categories';
import SubType from './subType';


const Form = ({selected, music, info, handleClick, selectedCategory, setSelected, setSelectedCategory}) => {

    const handleSubmit=(e) => {
        e.preventDefault()
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <SubType 
                selectedCategory={selectedCategory}
                music={music}
                info={info}
                selected={selected} 
                setSelected={setSelected} 
                setSelectedCategory={setSelectedCategory} 
            />
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
