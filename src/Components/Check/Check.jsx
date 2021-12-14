import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Check = ({name, balance}) => {
	return(
		<Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '15px 20px',
		borderBottom: '1px solid rgba(0, 0, 0, 0.1)', transition: '.2s linear', position: 'relative',
		'&:hover': {
			background: '#F4F4F4'
		},
		'&:before': {
			content: '""', display: 'block', width: 3, height: '100%', backgroundColor: 'primary.main', position: 'absolute', top: 0,
			left: 0, zIndex: 4, opacity: 0, transform: 'translateX(-3px)', transition: '.2s linear'
		},
		'&:hover:before': {
			opacity: 1,
			transform: 'translateX(0)'
		}}}>
		    <Typography sx={{color: '#252525', mr: 2.5}} variant="h6">
		        {name}
		    </Typography>

		    <Typography sx={{color: '#252525'}} variant="h5">
		        {balance}
		    </Typography>
		</Box>
	)
}

export default Check;