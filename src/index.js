import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#FF8F75'
        },
        success: {
            main: '#45C370'
        },
        warning: {
            main: '#FF595C'
        }
    },
    typography: {
        h3: {
            fontWeight: 600,
            fontSize: 18,
            fontFamily: 'Montserrat'
        },
        h4: {
            fontWeight: 600,
            fontSize: 16,
            fontFamily: 'Montserrat'
        },
        h5: {
            fontWeight: 600,
            fontSize: 14,
            fontFamily: 'Montserrat'
        },
        h6: {
            fontWeight: 400,
            fontSize: 14,
            fontFamily: 'Montserrat'
        },
        p: {
            fontWeight: 400,
            fontSize: 12,
            fontFamily: 'Montserrat'
        }
    },
    shape: {
        borderRadius: 10
    }
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);