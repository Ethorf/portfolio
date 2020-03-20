import React from 'react';
import './performance.scss';
import Autocatalytica from '../autocatalytica/autocatalytica.js';
import Hosana from '../hosana/hosana.js';
import Solo from '../solo/solo.js';
import ExKathedra from '../exKathedra/exKathedra';

export default function Performance(props) {
	console.log(props.autocatalyticaOpen);
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
							} ${props.autocatalyticaOpen ? 'white' : ''}`}
						>
							Autocatalytica
						</h1>
						<h3
							className={`${
								props.autocatalyticaOpen === true ? 'performance__back-button' : 'invisible'
							}`}
							onClick={props.toggleAutocatalyticaOpen}
						>
							Back
						</h3>
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
							className={`performance__section-header performance__hosana-header ${
								props.autocatalyticaOpen || props.soloOpen || props.exKathedraOpen ? 'invisible' : ''
							}`}
						>
							Hosana
						</h1>
						<h3
							className={`${props.hosanaOpen === true ? 'performance__back-button' : 'invisible'}`}
							onClick={props.toggleHosanaOpen}
						>
							Back
						</h3>
					</div>
				</div>
				<div className={`performance__section-header-container`}>
					<div className={`performance__section-container-left`}>
						<h1
							onClick={props.toggleSoloOpen}
							className={`performance__section-header performance__solo-header ${
								props.autocatalyticaOpen || props.hosanaOpen || props.exKathedraOpen ? 'invisible' : ''
							}
                            ${props.soloOpen ? 'performance__solo-header-open' : 'performance__solo-header'}`}
						>
							Solo
						</h1>
						<h3
							className={`${
								props.soloOpen === true
									? 'performance__back-button performance__back-button-bottom'
									: 'invisible'
							}`}
							onClick={props.toggleSoloOpen}
						>
							Back
						</h3>
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
							} ${
								props.exKathedraOpen
									? 'performance__ex-kathedra-header-open'
									: 'performance__ex-kathedra-header'
							}`}
						>
							Ex Kathedra
						</h1>
						<h3
							className={`${
								props.exKathedraOpen === true
									? 'performance__back-button performance__back-button-bottom'
									: 'invisible'
							}`}
							onClick={props.toggleExKathedraOpen}
						>
							Back
						</h3>
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
