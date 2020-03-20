import React from 'react';
import './performance.scss';
import Autocatalytica from '../autocatalytica/autocatalytica.js';
import Hosana from '../hosana/hosana.js';
import Solo from '../solo/solo.js';
import ExKathedra from '../exKathedra/exKathedra';

export default function Performance(props) {
	return (
		<div className={`performance ${props.open ? '' : 'invisible'}`}>
			<div className={`performance__all-sections-header-container`}>
				<div className={`performance__section-header-container`}>
					<div className={`performance__section-container`}>
						<h1
							onClick={props.toggleAutocatalyticaOpen}
							className={`performance__section-header performance__autocatalytica-header ${
								props.hosanaOpen || props.soloOpen || props.exKathedraOpen ? 'invisible' : ''
							}`}
						>
							Autocatalytica
						</h1>
						<Autocatalytica
							autocatalyticaOpen={props.autocatalyticaOpen}
							toggleAutocatalyticaOpen={props.toggleAutocatalyticaOpen}
						/>
					</div>
					<div className={`performance__section-container`}>
						<h1
							onClick={props.toggleHosanaOpen}
							className={`performance__section-header performance__hosana-header ${
								props.autocatalyticaOpen || props.soloOpen || props.exKathedraOpen ? 'invisible' : ''
							}`}
						>
							Hosana
						</h1>
						<Hosana hosanaOpen={props.hosanaOpen} toggleHosanaOpen={props.toggleHosanaOpen} />
					</div>
				</div>
				<div className={`performance__section-header-container`}>
					<div className={`performance__section-container`}>
						<h1
							onClick={props.toggleSoloOpen}
							className={`performance__section-header performance__solo-header ${
								props.autocatalyticaOpen || props.hosanaOpen || props.exKathedraOpen ? 'invisible' : ''
							}`}
						>
							Solo
						</h1>
						<Solo soloOpen={props.soloOpen} toggleSoloOpen={props.toggleSoloOpen} />
					</div>
					<div className={`performance__section-container`}>
						<h1
							onClick={props.toggleExKathedraOpen}
							className={`performance__section-header performance__ex-kathedra-header ${
								props.autocatalyticaOpen || props.soloOpen || props.hosanaOpen ? 'invisible' : ''
							}`}
						>
							Ex Kathedra
						</h1>
						<ExKathedra
							exKathedraOpen={props.exKathedraOpen}
							toggleExKathedraOpen={props.toggleExKathedraOpen}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
