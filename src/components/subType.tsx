import React from 'react';
import { TextField, MenuItem} from '@mui/material';
import { musicPlatform } from './Data';
import { infoService } from './Data';

interface SubTypeProps {
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    music: string,
    info: string,
    selectedCategory: string
}

const SubType: React.FC<SubTypeProps> = ({selected, setSelected, music, info, selectedCategory}) => {
    
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        if(selectedCategory===music) {
            setSelected(e.target.value)
        } else if(selectedCategory===info) {
            setSelected(e.target.value)
        }
    }
    return (
        <div>
            <TextField
                style={{width: '200px', justifyContent:'center'}}
                select
                label="Select subType"
                id="outlined-select"
                size='small'
                value={selected}
                onChange={handleChange}
                disabled={!selectedCategory}
            >
                {selectedCategory===music &&
                musicPlatform.map((music) => (
                    <MenuItem key={music.id} value={music.name}>
                        {music.name}
                    </MenuItem>
                ))}
                {selectedCategory===info &&
                infoService.map((info) => (
                    <MenuItem key={info.id} value={info.name}>
                        {info.name}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}

export default SubType