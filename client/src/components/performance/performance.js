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
								props.hosanaOpen || props.soloOpen || props.exKathedraOpen ? 'invisible' : 'visible'
							} ${props.autocatalyticaOpen ? 'invisible' : 'visible'}`}
						>
							Autocatalytica
						</h1>
					</div>
					<h2
						className={`performance__divider ${
							props.hosanaOpen || props.autocatalyticaOpen || props.soloOpen || props.exKathedraOpen
								? 'invisible'
								: 'visible'
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
								props.hosanaOpen ? ' invisible' : 'visible  '
							} ${
								props.autocatalyticaOpen || props.soloOpen || props.exKathedraOpen
									? 'invisible'
									: 'visible'
							}`}
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
								props.autocatalyticaOpen || props.hosanaOpen || props.exKathedraOpen
									? 'invisible'
									: 'visible'
							}
                             ${
									props.soloOpen
										? 'invisible'
										: 'performance__solo-header performance__section-header visible'
								}`}
						>
							Solo
						</h1>
					</div>
					<h2
						className={`performance__divider ${
							props.hosanaOpen || props.autocatalyticaOpen || props.soloOpen || props.exKathedraOpen
								? 'invisible'
								: 'visible'
						}`}
					>
						||
					</h2>

					<div className={`performance__section-container-right`}>
						<h1
							onClick={props.toggleExKathedraOpen}
							className={`performance__section-header ${
								props.autocatalyticaOpen || props.soloOpen || props.hosanaOpen ? 'invisible' : ''
							} ${props.exKathedraOpen ? 'invisible' : 'performance__ex-kathedra-header visible'}`}
						>
							Ex Kathedra
						</h1>
					</div>
				</div>
			</div>
			<div className={`performance__all-sections-header-container-mobile`}>
				<h1
					onClick={props.toggleAutocatalyticaOpen}
					className={`performance__section-header performance__autocatalytica-header ${
						props.hosanaOpen || props.soloOpen || props.exKathedraOpen ? 'invisible' : 'visible'
					} ${props.autocatalyticaOpen ? 'invisible' : 'visible'}`}
				>
					Autocatalytica
				</h1>
				<h1
					onClick={props.toggleHosanaOpen}
					className={`performance__section-header ${
						props.hosanaOpen ? ' invisible' : ' performance__hosana-header '
					} ${props.autocatalyticaOpen || props.soloOpen || props.exKathedraOpen ? 'invisible' : 'visible'}`}
				>
					Hosana
				</h1>
				<h1
					onClick={props.toggleSoloOpen}
					className={`${
						props.autocatalyticaOpen || props.hosanaOpen || props.exKathedraOpen ? 'invisible' : 'visible'
					}
                             ${
									props.soloOpen
										? 'invisible'
										: 'performance__solo-header performance__section-header visible'
								}`}
				>
					Solo
				</h1>
				<h1
					onClick={props.toggleExKathedraOpen}
					className={`performance__section-header ${
						props.autocatalyticaOpen || props.soloOpen || props.hosanaOpen ? 'invisible' : 'visible'
					} ${props.exKathedraOpen ? 'invisible' : 'performance__ex-kathedra-header visible'}`}
				>
					Ex Kathedra
				</h1>
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
