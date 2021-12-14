import React from 'react';

import './Check.css';

const Check = ({name, balance}) => {
	return(
		<div className="check__item">
		    <p className="check__item--name">
		        {name}
		    </p>

		    <p className="check__item--balance">
		        {balance}
		    </p>
		</div>
	)
}

export default Check;