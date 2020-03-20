import React, { useContext, useState, useRef } from 'react';
import { TimelineMax } from 'gsap';
import './musicSection.scss';
import Performance from '../performance/performance.js';
import Engineering from '../engineering/engineering.js';
import Autocatalytica from '../autocatalytica/autocatalytica';

export default function MusicSection(props) {
	const engineeringHeaderTl = new TimelineMax({ paused: true });
	const performanceHeaderTl = new TimelineMax({ paused: true });
	const dividerTl = new TimelineMax({ paused: true });
	let [performanceOpen, setPerformanceOpen] = useState(false);
	let [performanceAnimation, setPerformanceAnimation] = useState(false);
	let [engineeringAnimation, setEngineeringHeaderAnimation] = useState(false);
	let [dividerAnimation, setDividerAnimation] = useState(false);

	let [engineeringOpen, setEngineeringOpen] = useState(false);
	let [autocatalyticaOpen, setAutocatalyticaOpen] = useState(false);
	let [hosanaOpen, setHosanaOpen] = useState(false);
	let [soloOpen, setSoloOpen] = useState(false);
	let [exKathedraOpen, setExKathedraOpen] = useState(false);
	let [bothOpen, setBothOpen] = useState(false);
	let performanceHeaderContainer = useRef(null);
	let engineeringHeaderContainer = useRef(null);
	let dividerContainer = useRef(null);

	const togglePerformanceOpen = () => {
		setPerformanceOpen(!performanceOpen);
		props.headersContainerMusicOpenAnimation();
		props.nameSmallAnimation();
	};
	const toggleEngineeringOpen = () => {
		setEngineeringOpen(!engineeringOpen);
	};
	const toggleAutocatalyticaOpen = () => {
		setAutocatalyticaOpen(!autocatalyticaOpen);
	};
	const toggleHosanaOpen = () => {
		setHosanaOpen(!hosanaOpen);
	};
	const toggleSoloOpen = () => {
		setSoloOpen(!soloOpen);
	};
	const toggleExKathedraOpen = () => {
		setExKathedraOpen(!exKathedraOpen);
	};
	const performanceOpenAnimation = () => {
		if (performanceOpen === false) {
			setPerformanceAnimation(
				performanceHeaderTl.to(performanceHeaderContainer, { duration: 1.2, x: 30 }).play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: 260, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl.to(engineeringHeaderContainer, { duration: 1.2, x: 280, opacity: 0 }).play()
			);
			togglePerformanceOpen();
			// toggleEngineeringOpen();
		} else {
			setPerformanceAnimation(performanceHeaderTl.to(performanceHeaderContainer, { duration: 1.2, x: 1 }).play());
			setEngineeringHeaderAnimation(
				engineeringHeaderTl.to(engineeringHeaderContainer, { duration: 1.2, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: 1, opacity: 0.9, fontSize: '2.8rem' }).play()
			);
			togglePerformanceOpen();
			// toggleEngineeringOpen();

			// setBothOpen(true);
		}
	};

	return (
		<div className={`musicSection ${props.musicSectionOpen ? '' : 'invisible'}`}>
			<div
				className={`musicSection__back-home-container ${performanceOpen || engineeringOpen ? '' : 'invisible'}`}
			>
				<h3 onClick={togglePerformanceOpen} className={`musicSection__back-button`}>
					Back
				</h3>
				<h3 className={`musicSection__small-divider`}>||</h3>
				<h3 onClick={togglePerformanceOpen} className={`musicSection__back-button`}>
					Home
				</h3>
			</div>
			<div
				className={`musicSection__sections-header-container ${
					performanceOpen || engineeringOpen ? 'center' : ''
				}`}
			>
				<h1
					onClick={performanceOpenAnimation}
					className={`musicSection__sections-header musicSection__performance-header ${
						engineeringOpen ? 'invisible' : ''
					} ${performanceOpen ? 'center' : ''} `}
					ref={(h1) => (performanceHeaderContainer = h1)}
				>
					Performance
				</h1>
				<h1
					ref={(h1) => (dividerContainer = h1)}
					className={`musicSection__divider ${performanceOpen || engineeringOpen ? 'invisible' : ''}`}
				>
					| |
				</h1>
				<h1
					onClick={toggleEngineeringOpen}
					className={`musicSection__sections-header musicSection__engineering-header ${
						performanceOpen ? 'invisible' : ''
					}`}
					ref={(h1) => (engineeringHeaderContainer = h1)}
				>
					Engineering
				</h1>
			</div>
			<Performance
				toggleAutocatalyticaOpen={toggleAutocatalyticaOpen}
				autocatalyticaOpen={autocatalyticaOpen}
				toggleHosanaOpen={toggleHosanaOpen}
				toggleSoloOpen={toggleSoloOpen}
				toggleExKathedraOpen={toggleExKathedraOpen}
				open={performanceOpen}
				headersContainerAnimation={props.headersContainerAnimation}
				autocatalyticaOpen={autocatalyticaOpen}
				hosanaOpen={hosanaOpen}
				soloOpen={soloOpen}
				exKathedraOpen={exKathedraOpen}
			/>
			<Engineering open={engineeringOpen} headersContainerAnimation={props.headersContainerAnimation} />
		</div>
	);
}
