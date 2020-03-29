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
	let [allContainerAnimation, setAllContainerAnimation] = useState(false);
	let [autocatalyticaOpen, setAutocatalyticaOpen] = useState(false);
	let [hosanaOpen, setHosanaOpen] = useState(false);
	let [soloOpen, setSoloOpen] = useState(false);
	let [exKathedraOpen, setExKathedraOpen] = useState(false);
	let performanceHeaderContainer = useRef(null);
	let engineeringHeaderContainer = useRef(null);
	let performanceHeaderContainerMobile = useRef(null);
	let engineeringHeaderContainerMobile = useRef(null);
	let dividerContainer = useRef(null);
	let allContainer = useRef(null);
	let largeHeaderFont = '3.3rem';
	let baseHeaderFont = '2.3rem';
	let baseDividerFont = '2.4rem';
	let mobileLargeHeaderFont = '2.5rem';
	let mobileBaseHeaderFont = '1.5rem';
	let allContainerMobileTop = '29vh';

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
		if (props.size.width >= 993) {
			x = largeHeaderFont;
		} else {
			x = baseHeaderFont;
		}
		return x;
	};
	const performanceAnimSize = () => {
		let x = 0;
		if (props.size.width >= 1700) {
			x = '9vw';
		} else if (props.size.width >= 1500 && props.size.width < 1699) {
			x = '11vw';
		} else if (props.size.width >= 1200 && props.size.width < 1499) {
			x = '11vw';
		} else if (props.size.width >= 993 && props.size.width < 1199) {
			x = '15vw';
		} else if (props.size.width >= 870 && props.size.width < 992) {
			x = '14vw';
		} else if (props.size.width >= 768 && props.size.width < 869) {
			x = '14vw';
		}
		return x;
	};
	const engineeringAnimSize = () => {
		let x = 0;
		if (props.size.width >= 1800) {
			x = '-9vw';
		} else if (props.size.width >= 1500 && props.size.width < 1799) {
			x = '-11vw';
		} else if (props.size.width >= 1200 && props.size.width < 1499) {
			x = '-13vw';
		} else if (props.size.width >= 993 && props.size.width < 1199) {
			x = '-15vw';
		} else if (props.size.width >= 870 && props.size.width < 992) {
			x = '-16vw';
		} else if (props.size.width >= 768 && props.size.width < 869) {
			x = '-14vw';
		}
		return x;
	};
	const composerAnimSizeMobile = () => {
		let x = 0;
		if (props.size.width >= 600 && props.size.width < 767) {
			x = '10vw';
		} else if (props.size.width >= 425 && props.size.width < 599) {
			x = '14vw';
		} else if (props.size.width >= 375 && props.size.width < 425) {
			x = '15vw';
		} else if (props.size.width >= 320 && props.size.width < 375) {
			x = '17vw';
		}
		return x;
	};
	const engineerAnimSizeMobile = () => {
		let x = 0;
		if (props.size.width >= 600 && props.size.width < 767) {
			x = '-14vw';
		} else if (props.size.width >= 425 && props.size.width < 599) {
			x = '-19vw';
		} else if (props.size.width >= 375 && props.size.width < 425) {
			x = '-19vw';
		} else if (props.size.width >= 320 && props.size.width < 375) {
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
						duration: 1.4,
						x: performanceAnimSize(),
						justifyContent: 'center',
						fontSize: largeHeaderFont
					})
					.play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: 260, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, { duration: 1.4, x: performanceAnimSize(), opacity: 0 })
					.play()
			);
			setAllContainerAnimation(allContainerTl.to(allContainer, { duration: 0.4, top: '13%' }).play());
			setPerformanceOpen(true);
			props.headersContainerMusicOpenAnimation();
			props.nameSmallAnimation();
			props.faceAnimationClose();
		} else {
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainer, { duration: 1.4, x: 0, fontSize: headerAnimSmallFontSize })
					.play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl.to(engineeringHeaderContainer, { duration: 1.4, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.4, x: 1, opacity: 0.9, fontSize: baseDividerFont }).play()
			);
			setAllContainerAnimation(allContainerTl.to(allContainer, { duration: 0.4, top: '32%' }).play());
			setPerformanceOpen(false);
			props.headersContainerMusicOpenAnimation();
			props.nameSmallAnimation();
			props.faceAnimationOpen();
		}
	};
	const engineeringHeaderOpenAnimation = () => {
		if (engineeringOpen === false) {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, {
						duration: 1.4,
						x: engineeringAnimSize(),
						justifyContent: 'center',
						fontSize: largeHeaderFont
					})
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, { duration: 1.2, x: engineeringAnimSize(), opacity: 0, fontSize: '0.4rem' })
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainer, { duration: 1.4, x: engineeringAnimSize(), opacity: 0 })
					.play()
			);
			setAllContainerAnimation(allContainerTl.to(allContainer, { duration: 0.4, top: '13%' }).play());
			setEngineeringOpen(true);
			props.headersContainerMusicOpenAnimation();
			props.nameSmallAnimation();
			props.faceAnimationClose();
		} else {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainer, {
						duration: 1.4,
						x: 0,
						fontSize: headerAnimSmallFontSize
					})
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl.to(performanceHeaderContainer, { duration: 1.4, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, {
						duration: 1.4,
						x: 1,
						opacity: 0.9,
						fontSize: baseDividerFont
					})
					.play()
			);
			setAllContainerAnimation(allContainerTl.to(allContainer, { duration: 0.4, top: '32%' }).play());
			setEngineeringOpen(false);
			props.faceAnimationOpen();
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
						opacity: 0,
						fontSize: '0.4rem'
					})
					.play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainerMobile, { duration: 1.4, x: composerAnimSizeMobile(), opacity: 0 })
					.play()
			);
			setPerformanceOpen(true);
			setAllContainerAnimation(allContainerTl.to(allContainer, { duration: 0.4, top: '13%' }).play());
			props.musicHeaderFadeOutAnimation();
			props.toggleBackButtonOpen();
		} else {
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainerMobile, { duration: 1.4, x: 0, fontSize: mobileBaseHeaderFont })
					.play()
			);
			setEngineeringHeaderAnimation(
				engineeringHeaderTl.to(engineeringHeaderContainerMobile, { duration: 1.4, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, { duration: 1.4, x: 1, opacity: 0.9, fontSize: mobileBaseHeaderFont })
					.play()
			);
			setPerformanceOpen(false);
			setAllContainerAnimation(
				allContainerTl.to(allContainer, { duration: 0.4, top: allContainerMobileTop }).play()
			);

			props.musicHeaderFadeInAnimation();
			props.toggleBackButtonOpen();

			// props.headersContainerMusicOpenAnimation();
		}
	};
	const engineeringHeaderOpenAnimationMobile = () => {
		if (engineeringOpen === false) {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainerMobile, {
						duration: 1.4,
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
						opacity: 0,
						fontSize: '0.4rem'
					})
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl
					.to(performanceHeaderContainerMobile, { duration: 1.4, x: engineerAnimSizeMobile(), opacity: 0 })
					.play()
			);
			setEngineeringOpen(true);
			setAllContainerAnimation(allContainerTl.to(allContainer, { duration: 0.4, top: '13%' }).play());
			props.musicHeaderFadeOutAnimation();
			props.toggleBackButtonOpen();
		} else {
			setEngineeringHeaderAnimation(
				engineeringHeaderTl
					.to(engineeringHeaderContainerMobile, { duration: 1.4, x: 0, fontSize: mobileBaseHeaderFont })
					.play()
			);
			setPerformanceHeaderAnimation(
				performanceHeaderTl.to(performanceHeaderContainerMobile, { duration: 1.4, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, { duration: 1.4, x: 1, opacity: 0.9, fontSize: mobileBaseHeaderFont })
					.play()
			);
			setAllContainerAnimation(
				allContainerTl.to(allContainer, { duration: 0.4, top: allContainerMobileTop }).play()
			);
			setEngineeringOpen(false);
			props.musicHeaderFadeInAnimation();
			props.toggleBackButtonOpen();

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
		<div
			ref={(div) => (allContainer = div)}
			className={`musicSection ${props.musicSectionOpen ? '' : 'invisible'}`}
		>
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
				<a href="http://www.ethorf.com" className={`musicSection__home-button`}>
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
