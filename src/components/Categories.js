import React, { useEffect, useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

const apis=[
    {
        id: 1,
        category: 'Music'
    }
]

const Categories = () => {
    const [selectedCategory, setSelectedCategory]=useState('Music')
    const [filteredApis, setFilteredApis]=useState(apis)

    useEffect(() => {
        if(selectedCategory==='Music') {
            const filtered=apis.filter(api=> api.category===selectedCategory)
            setFilteredApis(filtered)
        }
    }, [selectedCategory])
    return (
        <div>
            <TextField
                style={{justifyContent: 'center', justifyItems: 'center', marginLeft: '240px'}}
                variant='outlined'
                label="Select a category"
                id='outlined-basic'
                size='small'
                select
                value={selectedCategory}
                sx={{
                    width: 250,
                    maxWidth: '100%'
                }}
            >
                {filteredApis.map((cate) => (
                    <MenuItem key={cate.id} value={cate.category}>
                    {cate.category}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}

export default Categories
