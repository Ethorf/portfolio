import React, { useContext, useState, useRef } from 'react';
import { TimelineMax } from 'gsap';
import './musicSection.scss';
import Performance from '../performance/performance.js';
import Engineering from '../engineering/engineering.js';

export default function MusicSection(props) {
	const engineeringHeaderTl = new TimelineMax({ paused: true });
	const performanceHeaderTl = new TimelineMax({ paused: true });
	const dividerTl = new TimelineMax({ paused: true });
	const allContainerTl = new TimelineMax({ paused: true });
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
	let largeHeaderFont = '3.3rem';
	let baseHeaderFont = '2.3rem';
	let baseDividerFont = '2.4rem';
	let mobileLargeHeaderFont = '2.5rem';
	let mobileBaseHeaderFont = '1.5rem';
	let allContainerMobileTop = '29vh';
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
	//Animation Size Functions
	const headerAnimSmallFontSize = () => {
		let x;
		if (window.innerWidth >= 993) {
			x = largeHeaderFont;
		} else {
			x = baseHeaderFont;
		}
		return x;
	};
	const performanceAnimSize = () => {
		let x = 0;
		if (window.innerWidth >= 1700) {
			x = '9vw';
		} else if (window.innerWidth >= 1500 && window.innerWidth < 1699) {
			x = '11vw';
		} else if (window.innerWidth >= 1200 && window.innerWidth < 1499) {
			x = '11vw';
		} else if (window.innerWidth >= 993 && window.innerWidth < 1199) {
			x = '15vw';
		} else if (window.innerWidth >= 870 && window.innerWidth < 992) {
			x = '14vw';
		} else if (window.innerWidth >= 768 && window.innerWidth < 869) {
			x = '14vw';
		}
		return x;
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
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainer, {
						duration: animationDuration,
						ease: 'power2.out',
						left: '-25%'
					})
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, { duration: animationDuration, x: 260, autoAlpha: 0, fontSize: '0.4rem' })
					.play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, {
						duration: animationDuration,
						x: 100,
						autoAlpha: 0,
						ease: 'power1.out'
					})
					.play()
			);
			setPerformanceOpen(true);
		} else {
			setPerformanceHeaderAnimation(
				performanceHeaderTl.to(performanceHeaderContainer, { duration: animationDuration, left: '0%' }).play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, { duration: animationDuration, x: 0, autoAlpha: 1 })
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, {
						duration: animationDuration,
						x: 1,
						autoAlpha: 0.9,
						fontSize: baseDividerFont
					})
					.play()
			);
			setPerformanceOpen(false);
		}
	};
	const engineeringHeaderOpenAnimation = () => {
		if (engineeringOpen === false) {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, {
						duration: animationDuration,
						ease: 'power1.out',
						left: '-45%'
					})
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, { duration: 1.2, x: engineeringAnimSize(), autoAlpha: 0, fontSize: '0.4rem' })
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainer, { duration: animationDuration, y: -200, autoAlpha: 0 })
					.play()
			);
			setEngineeringOpen(true);
		} else {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, {
						duration: animationDuration,
						left: '0%'
					})
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainer, { duration: animationDuration, y: 0, autoAlpha: 1 })
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, {
						duration: animationDuration,
						x: 1,
						autoAlpha: 0.9,
						fontSize: baseDividerFont
					})
					.play()
			);
			setEngineeringOpen(false);
		}
	};
	const composerHeaderOpenAnimationMobile = () => {
		if (performanceOpen === false) {
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainerMobile, {
						duration: animationDuration,
						x: composerAnimSizeMobile(),
						justifyContent: 'center',
						fontSize: mobileLargeHeaderFont
					})
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, {
						duration: 1.2,
						x: composerAnimSizeMobile(),
						autoAlpha: 0,
						fontSize: '0.4rem'
					})
					.play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainerMobile, {
						duration: animationDuration,
						x: composerAnimSizeMobile(),
						autoAlpha: 0
					})
					.play()
			);
			setPerformanceOpen(true);
			props.toggleBackButtonOpen();
		} else {
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainerMobile, {
						duration: animationDuration,
						x: 0,
						fontSize: mobileBaseHeaderFont
					})
					.play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainerMobile, { duration: animationDuration, x: 1, autoAlpha: 1 })
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, {
						duration: animationDuration,
						x: 1,
						autoAlpha: 0.9,
						fontSize: mobileBaseHeaderFont
					})
					.play()
			);
			setPerformanceOpen(false);
			props.toggleBackButtonOpen();
		}
	};
	const engineeringHeaderOpenAnimationMobile = () => {
		if (engineeringOpen === false) {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainerMobile, {
						duration: animationDuration,
						x: engineerAnimSizeMobile(),
						justifyContent: 'center',
						fontSize: mobileLargeHeaderFont
					})
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, {
						duration: 1.2,
						x: engineerAnimSizeMobile(),
						autoAlpha: 0,
						fontSize: '0.4rem'
					})
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainerMobile, {
						duration: animationDuration,
						x: engineerAnimSizeMobile(),
						autoAlpha: 0
					})
					.play()
			);
			setEngineeringOpen(true);
			props.toggleBackButtonOpen();
		} else {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainerMobile, {
						duration: animationDuration,
						x: 0,
						fontSize: mobileBaseHeaderFont
					})
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainerMobile, { duration: animationDuration, x: 1, autoAlpha: 1 })
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, {
						duration: animationDuration,
						x: 1,
						autoAlpha: 0.9,
						fontSize: mobileBaseHeaderFont
					})
					.play()
			);
			setEngineeringOpen(false);
			props.toggleBackButtonOpen();
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
					<h1 className={`musicSection__performance-header-title`}>Performance</h1>
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

				<div
					className={`musicSection__section-header-container musicSection__engineering-section-header-container
					${engineeringOpen ? 'music-section-open-left-underline' : ''}
					
					`}
					onClick={engineeringOpen ? null : engineeringHeaderOpenAnimation}
					ref={(div) => (engineeringHeaderContainer = div)}
				>
					<h1 className={`musicSection__engineering-header-title`}>Engineering</h1>
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
