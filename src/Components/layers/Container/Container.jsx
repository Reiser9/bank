import React from 'react';
import Box from '@mui/material/Box';

const Container = ({children}) => {
	return(
		<Box sx={{p:2.5, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
			{children}
		</Box>
	)
}

export default Container;