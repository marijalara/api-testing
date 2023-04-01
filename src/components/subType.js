import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import MusicPlatform from './MusicPlatform';
import InfoService from './InfoService';

const SubType = ({selected,
    setSelected,selected1,
    setSelectedCategory,
    setSelected1,music, info,selectedCategory,
    selectedSubType,
    setSelectedSubType
}) => {
  return (
    <div>
        
        <TextField 
            style={{width: '200px', justifyContent:'center'}}
            select
            label="Select subType"
            id="outlined-select-musicPlatform"
            size='small'
            value={selectedSubType}
            onChange={(e) => setSelectedSubType(e.target.value)}
            disabled={!selectedCategory}
        >
        
        
      {selectedCategory===music ? (
            <MusicPlatform 
                selected={selected} 
                setSelected={setSelected}
                selectedCategory={selectedCategory}
                music={music}
            />
        ): null}
        {selectedCategory===info ? (
            <InfoService 
                selected1={selected1}
                setSelectedCategory={setSelectedCategory}
                setSelected1={setSelected1}
            />
        ): null}
      
      </TextField>
      
    </div>
  )
}

export default SubType
