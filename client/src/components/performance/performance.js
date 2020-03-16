import React, { useContext } from 'react';
import './performance.scss';

export default function Performance(open) {
	return (
		<div className={`performance ${open.open ? '' : 'invisible'}`}>
			<div className={`performance__all-sections-header-container`}>
				<div className={`performance__section-header-container`}>
					<h1 className={`performance__section-header performance__autocatalytica-header`}>Autocatalytica</h1>
					<h1 className={`performance__section-header performance__hosana-header`}>Hosana</h1>
				</div>
				<div className={`performance__section-header-container`}>
					<h1 className={`performance__section-header performance__solo-header`}>Solo</h1>
					<h1 className={`performance__section-header performance__ex-kathedra-header`}>Ex Kathedra</h1>
				</div>
			</div>
		</div>
	);
}
