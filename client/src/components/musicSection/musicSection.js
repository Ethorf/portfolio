import React, { useContext, useState, useRef } from 'react';
import { TimelineMax } from 'gsap';
import './musicSection.scss';
import Performance from '../performance/performance.js';
import Engineering from '../engineering/engineering.js';

export default function MusicSection(props) {
	const engineeringHeaderTl = new TimelineMax({ paused: true });
	const performanceHeaderTl = new TimelineMax({ paused: true });
	const dividerTl = new TimelineMax({ paused: true });
	let [performanceOpen, setPerformanceOpen] = useState(false);
	let [bothOpen, setBothOpen] = useState(false);
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
	let performanceHeaderContainerMobile = useRef(null);
	let engineeringHeaderContainerMobile = useRef(null);
	let dividerContainer = useRef(null);
	let dividerContainerMobile = useRef(null);

	const togglePerformanceOpen = () => {
		setPerformanceOpen(!performanceOpen);
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
	const performanceHeaderOpenAnimation = () => {
		if (performanceOpen === false) {
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainer, {
						duration: 1.4,
						x: 150,
						justifyContent: 'center',
						fontSize: '3.9rem'
					})
					.play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: 260, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl.to(engineeringHeaderContainer, { duration: 1.4, x: 280, opacity: 0 }).play()
			);
			setPerformanceOpen(true);
			props.headersContainerMusicOpenAnimation();
			props.nameSmallAnimation();
		} else {
			setPerformanceHeaderAnimation(
				performanceHeaderTl.to(performanceHeaderContainer, { duration: 1.4, x: 0, fontSize: '3.3rem' }).play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl.to(engineeringHeaderContainer, { duration: 1.4, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.4, x: 1, opacity: 0.9, fontSize: '2.8rem' }).play()
			);
			setPerformanceOpen(false);
			props.headersContainerMusicOpenAnimation();
			props.nameSmallAnimation();
		}
	};
	const composerHeaderOpenAnimationMobile = () => {
		if (performanceOpen === false) {
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainerMobile, {
						duration: 1.4,
						x: '20vw',
						justifyContent: 'center',
						fontSize: '2.1rem'
					})
					.play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: 260, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl.to(engineeringHeaderContainerMobile, { duration: 1.4, x: 280, opacity: 0 }).play()
			);
			setPerformanceOpen(true);
			props.musicHeaderFadeOutAnimation();
		} else {
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainerMobile, { duration: 1.4, x: 0, fontSize: '1.7rem' })
					.play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl.to(engineeringHeaderContainerMobile, { duration: 1.4, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.4, x: 1, opacity: 0.9, fontSize: '1.7rem' }).play()
			);
			setPerformanceOpen(false);
			props.musicHeaderFadeInAnimation();
			// props.headersContainerMusicOpenAnimation();
		}
	};
	const engineeringHeaderOpenAnimation = () => {
		if (engineeringOpen === false) {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, {
						duration: 1.4,
						x: -150,
						justifyContent: 'center',
						fontSize: '3.9rem'
					})
					.play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: -260, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl.to(performanceHeaderContainer, { duration: 1.4, x: -280, opacity: 0 }).play()
			);
			setEngineeringOpen(true);
			props.headersContainerMusicOpenAnimation();
			props.nameSmallAnimation();
		} else {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl.to(engineeringHeaderContainer, { duration: 1.4, x: 0, fontSize: '3.3rem' }).play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl.to(performanceHeaderContainer, { duration: 1.4, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.4, x: 1, opacity: 0.9, fontSize: '2.8rem' }).play()
			);
			setEngineeringOpen(false);
			props.headersContainerMusicOpenAnimation();
			props.nameSmallAnimation();
		}
	};
	const engineeringHeaderOpenAnimationMobile = () => {
		if (engineeringOpen === false) {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainerMobile, {
						duration: 1.4,
						x: '-23vw',
						justifyContent: 'center',
						fontSize: '2.1rem'
					})
					.play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: -260, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl.to(performanceHeaderContainerMobile, { duration: 1.4, x: -280, opacity: 0 }).play()
			);
			setEngineeringOpen(true);
			props.musicHeaderFadeOutAnimation();
		} else {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainerMobile, { duration: 1.4, x: 0, fontSize: '1.7rem' })
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl.to(performanceHeaderContainerMobile, { duration: 1.4, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.4, x: 1, opacity: 0.9, fontSize: '1.7rem' }).play()
			);
			setEngineeringOpen(false);
			props.musicHeaderFadeInAnimation();

			// setBothOpen(true);
		}
	};
	const backButton = () => {
		if (performanceOpen) {
			performanceHeaderOpenAnimation();
		} else {
			engineeringHeaderOpenAnimation();
		}
	};
	const backButtonMobile = () => {
		if (performanceOpen) {
			composerHeaderOpenAnimationMobile();
			props.musicHeaderFadeInAnimation();
		} else {
			engineeringHeaderOpenAnimationMobile();
		}
	};
	return (
		<div className={`musicSection ${props.musicSectionOpen ? '' : 'invisible'}`}>
			<div
				className={`musicSection__back-home-container ${performanceOpen || engineeringOpen ? '' : 'invisible'}`}
			>
				<h3 onClick={backButton} className={`musicSection__back-button`}>
					Back
				</h3>
				<h3 onClick={backButtonMobile} className={`musicSection__back-button-mobile`}>
					Back
				</h3>
				<h3 className={`musicSection__small-divider`}>||</h3>
				<a href="http://localhost:3000" className={`musicSection__home-button`}>
					Home
				</a>
			</div>
			{/* Headers start */}
			<div className={`musicSection__headers-container`}>
				<div className={`musicSection__section-header-container`} onClick={performanceHeaderOpenAnimation}>
					<h1
						ref={(div) => (performanceHeaderContainer = div)}
						className={`musicSection__sections-header musicSection__performance-header`}
					>
						Performance
					</h1>
				</div>
				<div
					className={`musicSection__section-header-container-mobile`}
					onClick={composerHeaderOpenAnimationMobile}
				>
					<h1
						ref={(div) => (performanceHeaderContainerMobile = div)}
						className={`musicSection__sections-header-mobile musicSection__composer-header`}
					>
						Composer
					</h1>
				</div>
				<h2
					ref={(h2) => (dividerContainer = h2)}
					className={`musicSection__divider ${performanceOpen || engineeringOpen ? 'invisible' : ''}`}
				>
					| |
				</h2>
				<div className={`musicSection__header-container`} onClick={engineeringHeaderOpenAnimation}>
					<h1
						ref={(div) => (engineeringHeaderContainer = div)}
						className={`musicSection__sections-header musicSection__engineering-header
                    `}
					>
						Engineering
					</h1>
				</div>
				<div className={`musicSection__header-container-mobile`} onClick={engineeringHeaderOpenAnimationMobile}>
					<h1
						ref={(div) => (engineeringHeaderContainerMobile = div)}
						className={`musicSection__sections-header-mobile musicSection__engineering-header-mobile
                    `}
					>
						Engineer
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
