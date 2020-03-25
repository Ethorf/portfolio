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
					<div
						className={`   ${
							props.autocatalyticaOpen
								? 'centered-section-header-left'
								: 'performance__section-container-left '
						}`}
					>
						<h1
							onClick={props.toggleAutocatalyticaOpen}
							className={`performance__section-header performance__autocatalytica-header ${
								props.hosanaOpen || props.soloOpen || props.exKathedraOpen ? 'invisible' : ''
							} ${props.autocatalyticaOpen ? 'invisible' : ''}`}
						>
							Autocatalytica
						</h1>
					</div>
					<h2
						className={`performance__divider ${
							props.hosanaOpen || props.autocatalyticaOpen || props.soloOpen || props.exKathedraOpen
								? 'invisible'
								: ''
						}`}
					>
						||
					</h2>
					<div
						className={`${
							props.hosanaOpen ? 'centered-section-header-right' : 'performance__section-container-right '
						}`}
					>
						<h1
							onClick={props.toggleHosanaOpen}
							className={`performance__section-header ${
								props.hosanaOpen ? ' invisible' : ' performance__hosana-header '
							} ${props.autocatalyticaOpen || props.soloOpen || props.exKathedraOpen ? 'invisible' : ''}`}
						>
							Hosana
						</h1>
					</div>
				</div>
				<div className={`performance__section-header-container`}>
					<div className={`performance__section-container-left`}>
						<h1
							onClick={props.toggleSoloOpen}
							className={`${
								props.autocatalyticaOpen || props.hosanaOpen || props.exKathedraOpen ? 'invisible' : ''
							}
                             ${props.soloOpen ? 'invisible' : 'performance__solo-header performance__section-header'}`}
						>
							Solo
						</h1>
					</div>
					<h2
						className={`performance__divider ${
							props.hosanaOpen || props.autocatalyticaOpen || props.soloOpen || props.exKathedraOpen
								? 'invisible'
								: ''
						}`}
					>
						||
					</h2>

					<div className={`performance__section-container-right`}>
						<h1
							onClick={props.toggleExKathedraOpen}
							className={`performance__section-header ${
								props.autocatalyticaOpen || props.soloOpen || props.hosanaOpen ? 'invisible' : ''
							} ${props.exKathedraOpen ? 'invisible' : 'performance__ex-kathedra-header'}`}
						>
							Ex Kathedra
						</h1>
					</div>
				</div>
			</div>
			<Autocatalytica
				autocatalyticaOpen={props.autocatalyticaOpen}
				toggleAutocatalyticaOpen={props.toggleAutocatalyticaOpen}
			/>
			<ExKathedra exKathedraOpen={props.exKathedraOpen} toggleExKathedraOpen={props.toggleExKathedraOpen} />
			<Solo soloOpen={props.soloOpen} toggleSoloOpen={props.toggleSoloOpen} />
			<Hosana hosanaOpen={props.hosanaOpen} toggleHosanaOpen={props.toggleHosanaOpen} />
		</div>
	);
}
