import React, { useContext } from 'react';
import './engineering.scss';

export default function Engineering(open) {
	return (
		<div className={`engineering ${open.open ? '' : 'invisible'}`}>
			<div className={`engineering__sections-header-container`}>
				<h1 className={`engineering__sections-header engineering__engineering-header`}>Amy Beth Anders</h1>
			</div>
		</div>
	);
}
