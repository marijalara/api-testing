import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const apis=[
    {
        id: 1,
        category: 'Music'
    }, 
    {
        id: 2, 
        category: 'Info'
    }
]

const Categories = ({selectedCategory, setSelectedCategory }) => {
    return (
        <div>
            <TextField
                style={{justifyContent: 'center', justifyItems: 'center', marginLeft: '220px'}}
                variant='outlined'
                label="Select type"
                id='outlined-basic'
                size='small'
                select
                value={selectedCategory}
                onChange={(e) =>setSelectedCategory(e.target.value)}
                sx={{
                    width: 250,
                    maxWidth: '100%'
                }}
            >
                {apis.map((cate) => (
                    <MenuItem key={cate.id} value={cate.category}>
                    {cate.category}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}

export default Categories
