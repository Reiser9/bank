import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './App.css';

import Container from './Components/layers/Container/Container.jsx';
import Check from './Components/Check/Check.jsx';

const App = () => {
    return(
        <Container>
            {/*Пользователь*/}

            <Box sx={{width: '100%', borderRadius: 1, background: '#fff', display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start'}}>
                <Typography sx={{p: '20px 20px 0 20px', color: '#181818'}} variant="h4">
                    Счета
                </Typography >

                <Box sx={{width: '100%', position: 'relative'}}>
                    <Box sx={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none',
                    '&:before': {
                        content: '""', display: 'block', width: '100%', height: 36, position: 'absolute',
                        bottom: 0, left: 0, zIndex: 4, background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 162.5%)'
                    }}}></Box>

                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                    mt: 1.25, pb: 1.25, height: 270, overflowX: 'hidden', overflowY: 'auto', position: 'relative',
                    borderRadius: '0 0 10px 10px',
                    '&::-webkit-scrollbar': {
                        width: 2
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'rgba(0, 0, 0, .2)',
                        width: 1
                    },
                    '&::-webkit-scrollbar-thumb': {
                        width: 2,
                        borderRadius: 1,
                        backgroundColor: 'primary.main'
                    }}}>
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                        <Check name="Основной счёт" balance="40 425,58 ₽" />
                    </Box>
                </Box>
            </Box>

            {/*Доходы и расходы*/}

            {/*Цель*/}

            {/*Создать счёт*/}
        </Container>
    );
}

export default App;