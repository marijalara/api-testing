import React from 'react';
import { Stack, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Categories from './Categories';
import SubType from './subType';

interface FormProps {
    selected: string,
    music: string,
    info: string,
    selectedCategory: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
    handleClick: () => void
}

const Form: React.FC<FormProps> = ({selected, music, info, selectedCategory, setSelected, setSelectedCategory, handleClick}) => {
    
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>) => {
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
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        size='medium'
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