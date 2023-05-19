import React from 'react';
import { Typography} from '@mui/material';

const Header: React.FC = () => {
    return (
        <div>
            <header className='App-header'>
                <Typography 
                    variant='h3'
                    style={{
                        textAlign: 'center',
                        fontSize: '35px',
                        marginBottom: '40px'
                    }}
                >
                    API testing
                </Typography>
            </header>
        </div>
    )
}

export default Header