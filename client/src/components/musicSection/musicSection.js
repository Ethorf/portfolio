import React, { useState, useRef } from 'react';
import { TimelineMax } from 'gsap';
import './musicSection.scss';
import Performance from '../performance/performance.js';
import Engineering from '../engineering/engineering.js';
import { engineerAnimYAxis } from '../../functions/animation-functions.js';

export default function MusicSection(props) {
	const engineeringHeaderTl = new TimelineMax({ paused: true });
	const performanceHeaderTl = new TimelineMax({ paused: true });
	const dividerTl = new TimelineMax({ paused: true });
	let [performanceOpen, setPerformanceOpen] = useState(false);
	let [engineeringOpen, setEngineeringOpen] = useState(false);
	let [performanceHeaderAnimation, setPerformanceHeaderAnimation] = useState(false);
	let [engineeringHeaderAnimation, setEngineeringHeaderAnimation] = useState(false);
	let [dividerAnimation, setDividerAnimation] = useState(false);
	let [autocatalyticaOpen, setAutocatalyticaOpen] = useState(false);
	let [hosanaOpen, setHosanaOpen] = useState(false);
	let [soloOpen, setSoloOpen] = useState(false);
	let [exKathedraOpen, setExKathedraOpen] = useState(false);
	let performanceHeaderContainer = useRef(null);
	let engineeringHeaderContainer = useRef(null);
	let animationDuration = 1.4;

	//Toggle Functions
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
	const engineeringAnimSize = () => {
		let x = 0;
		if (window.innerWidth >= 1800) {
			x = '-9vw';
		} else if (window.innerWidth >= 1500 && window.innerWidth < 1799) {
			x = '-11vw';
		} else if (window.innerWidth >= 1200 && window.innerWidth < 1499) {
			x = '-13vw';
		} else if (window.innerWidth >= 993 && window.innerWidth < 1199) {
			x = '-15vw';
		} else if (window.innerWidth >= 870 && window.innerWidth < 992) {
			x = '-16vw';
		} else if (window.innerWidth >= 768 && window.innerWidth < 869) {
			x = '-14vw';
		}
		return x;
	};
	const composerAnimSizeMobile = () => {
		let x = 0;
		if (window.innerWidth >= 600 && window.innerWidth < 767) {
			x = '10vw';
		} else if (window.innerWidth >= 425 && window.innerWidth < 599) {
			x = '14vw';
		} else if (window.innerWidth >= 375 && window.innerWidth < 425) {
			x = '15vw';
		} else if (window.innerWidth >= 320 && window.innerWidth < 375) {
			x = '17vw';
		}
		return x;
	};
	const engineerAnimSizeMobile = () => {
		let x = 0;
		if (window.innerWidth >= 600 && window.innerWidth < 767) {
			x = '-14vw';
		} else if (window.innerWidth >= 425 && window.innerWidth < 599) {
			x = '-19vw';
		} else if (window.innerWidth >= 375 && window.innerWidth < 425) {
			x = '-19vw';
		} else if (window.innerWidth >= 320 && window.innerWidth < 375) {
			x = '-19vw';
		}
		return x;
	};
	//Animation Execution Functions
	const performanceHeaderOpenAnimation = () => {
		if (performanceOpen === false) {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, {
						duration: animationDuration,
						y: 100,
						x: -100,
						autoAlpha: 0,
						ease: 'power1.out'
					})
					.play()
			);
			setPerformanceOpen(true);
		} else {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, { duration: animationDuration, y: 0, x: 0, autoAlpha: 1 })
					.play()
			);
			setPerformanceOpen(false);
		}
	};
	const engineeringHeaderOpenAnimation = () => {
		if (engineeringOpen === false) {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(performanceHeaderContainer, { duration: 0.6, y: -120, x: -100, autoAlpha: 0 })
					.to(engineeringHeaderContainer, {
						duration: animationDuration,
						left: '0%',
						y: engineerAnimYAxis()
					})
					.play()
			);
			setEngineeringOpen(true);
		} else {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, {
						duration: animationDuration,
						left: '5%',
						y: 0,
						ease: 'power1.out'
					})
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainer, { duration: animationDuration, y: 0, x: 0, autoAlpha: 1 })
					.play()
			);
			setEngineeringOpen(false);
		}
	};
	const backButton = () => {
		if (performanceOpen) {
			performanceHeaderOpenAnimation();
		} else {
			engineeringHeaderOpenAnimation();
		}
	};
	return (
		<div className={`musicSection ${props.musicSectionOpen ? 'visible' : 'invisible'}`}>
			{/* Headers start */}
			<div
				className={`musicSection__headers-container 
				`}
			>
				<h4
					className={` ${
						performanceOpen || engineeringOpen ? 'visible' : 'invisible'
					} musicSection__back-button`}
					onClick={backButton}
				>
					{'<<'}
				</h4>
				<div
					ref={(div) => (performanceHeaderContainer = div)}
					className={`musicSection__performance-section-header-container musicSection__section-header-container
					${performanceOpen ? 'music-section-open-left-underline' : ''}
					`}
					onClick={performanceOpen ? null : performanceHeaderOpenAnimation}
				>
					<h1
						className={`musicSection__performance-header-title ${
							performanceOpen ? '' : 'hover-underline-music-section'
						} `}
					>
						{window.innerWidth >= 768 ? 'Performance' : 'Composer'}
					</h1>
				</div>
				{/*}
				<h2
					ref={(h2) => (dividerContainer = h2)}
					className={`musicSection__divider ${performanceOpen || engineeringOpen ? 'invisible' : ''}`}
				>
					||
					</h2> */}

				<div
					className={`musicSection__section-header-container musicSection__engineering-section-header-container
					${engineeringOpen ? 'music-section-open-left-underline' : ''}`}
					onClick={engineeringOpen ? null : engineeringHeaderOpenAnimation}
					ref={(div) => (engineeringHeaderContainer = div)}
				>
					<h1
						className={`musicSection__engineering-header-title ${
							engineeringOpen ? '' : 'hover-underline-music-section'
						}`}
					>
						{window.innerWidth >= 768 ? 'Engineering' : 'Engineer'}
					</h1>
				</div>
			</div>
			<Performance
				toggleAutocatalyticaOpen={toggleAutocatalyticaOpen}
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
