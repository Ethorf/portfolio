import React, { useRef, useState, useContext } from 'react';
// import Context from './context.js';
import { TimelineMax } from 'gsap';
import Face from './assets/EricFacePopup-cropped.png';
//Component Imports
import WebSection from './components/webSection/webSection.js';
import MusicSection from './components/musicSection/musicSection.js';
import SocialButtons from './components/socialButtons/socialButtons';
import Contact from './components/contact/contact.js';
//Scss
import './main.scss';
import Resume from './assets//Eric-Thorfinnson-Resume.pdf';

function Main() {
	const webHeaderTl = new TimelineMax({ paused: true });
	const faceTl = new TimelineMax({ paused: true });
	const dividerTl = new TimelineMax({ paused: true });
	const arrowTl = new TimelineMax({ paused: true });
	const musicHeaderTl = new TimelineMax({ paused: true });
	let [webSectionOpen, setWebSectionOpen] = useState(false);
	let [bothOpen, setBothOpen] = useState(true);
	let [musicSectionOpen, setMusicSectionOpen] = useState(false);
	const [webHeaderAnimation, setWebHeaderAnimation] = useState(null);
	const [musicHeaderAnimation, setMusicHeaderAnimation] = useState(null);
	const [dividerAnimation, setDividerAnimation] = useState(null);
	const [faceOpen, setFaceOpen] = useState(null);
	const [arrowFade, setArrowFade] = useState(null);
	let webHeaderContainer = useRef(null);
	let musicHeaderContainer = useRef(null);
	let faceContainer = useRef(null);
	let dividerContainer = useRef(null);
	let arrowRightContainer = useRef(null);
	let arrowLeftContainer = useRef(null);

	const webHeaderOpenAnimation = () => {
		if (webSectionOpen === false) {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainer, { duration: 1.2, x: 280 }).play());
			setDividerAnimation(dividerTl.to(dividerContainer, { duration: 1.2, x: 260, opacity: 0 }).play());
			setMusicHeaderAnimation(
				musicHeaderTl.to(musicHeaderContainer, { duration: 1.2, x: 280, opacity: 0 }).play()
			);
			setWebSectionOpen(true);
			setBothOpen(false);
		} else {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainer, { duration: 1.2, x: 1 }).play());
			setMusicHeaderAnimation(musicHeaderTl.to(musicHeaderContainer, { duration: 1.2, x: 1, opacity: 1 }).play());
			setDividerAnimation(dividerTl.to(dividerContainer, { duration: 1.2, x: 1, opacity: 0.9 }).play());
			setWebSectionOpen(false);
			setBothOpen(true);
		}
	};
	const musicHeaderOpenAnimation = () => {
		if (musicSectionOpen === false) {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainer, { duration: 1.2, x: -270, opacity: 0 }).play());
			setMusicHeaderAnimation(musicHeaderTl.to(musicHeaderContainer, { duration: 1, x: -270 }).play());
			setDividerAnimation(dividerTl.to(dividerContainer, { duration: 1.2, x: -200, opacity: 0 }).play());
			setMusicSectionOpen(true);
			setBothOpen(false);
		} else {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainer, { duration: 1, x: 0, opacity: 1 }).play());
			setMusicHeaderAnimation(musicHeaderTl.to(musicHeaderContainer, { duration: 1, x: 0 }).play());
			setDividerAnimation(dividerTl.to(dividerContainer, { duration: 1, x: 0, opacity: 0.9 }).play());
			setMusicSectionOpen(false);
			setBothOpen(true);
		}
	};
	const arrowRightFadeAnimation = () => {
		if (webSectionOpen === true && bothOpen === false) {
			setArrowFade(arrowTl.to(arrowRightContainer, { duration: 0.7, opacity: 1 }).play());
		}
	};
	const arrowRightFadeOutAnimation = () => {
		if (webSectionOpen === true && bothOpen === false) {
			setArrowFade(arrowTl.to(arrowRightContainer, { duration: 0.2, opacity: 0, x: 50 }).play());
		}
	};
	const arrowLeftFadeAnimation = () => {
		if (musicSectionOpen === true && bothOpen === false) {
			setArrowFade(arrowTl.to(arrowLeftContainer, { duration: 1, opacity: 1 }).play());
		}
	};
	const arrowLeftFadeOutAnimation = () => {
		if (musicSectionOpen === true && bothOpen === false) {
			setArrowFade(arrowTl.to(arrowLeftContainer, { duration: 0.2, opacity: 0, x: -20 }).play());
		}
	};
	const faceAnimationOpen = () => {
		setFaceOpen(
			faceTl
				.from(faceContainer, { duration: 0.2, y: 250 })
				.to(faceContainer, { duration: 1.5, y: -50, opacity: 0.8 })
				.play()
		);
	};
	const faceAnimationClose = () => {
		setFaceOpen(faceTl.to(faceContainer, { duration: 1, y: 50, opacity: 0 }).play());
	};

	return (
		<div className="main">
			<div className={`main__bg`}></div>
			<header className="main__header-container">
				<img ref={(img) => (faceContainer = img)} className={`main__face-img`} src={Face} />
				<h1 onMouseEnter={faceAnimationOpen} onMouseLeave={faceAnimationClose} className="main__header">
					Eric Thorfinnson
				</h1>
				{/* <button onClick={faceAnimationOpen}>Face</button> */}
			</header>

			<div className={`main__sections-container`}>
				<div
					onClick={webHeaderOpenAnimation}
					onMouseEnter={arrowRightFadeAnimation}
					onMouseLeave={arrowRightFadeOutAnimation}
					ref={(h2) => (webHeaderContainer = h2)}
					className={`main__web-section-header main__section-header`}
				>
					<h2 className={` main__section-header-title`}>Full-stack Web Developer</h2>

					<h2
						className={`main__right-arrow main__arrow ${
							webSectionOpen === false && musicSectionOpen === false ? 'invisible' : ''
						} ${bothOpen ? 'invisible' : ''}`}
						ref={(h2) => (arrowRightContainer = h2)}
					>
						{'>>'}
					</h2>
				</div>
				<h2 className={`main__section-divider`} ref={(h2) => (dividerContainer = h2)}>
					||{' '}
				</h2>

				<div
					onClick={musicHeaderOpenAnimation}
					ref={(h2) => (musicHeaderContainer = h2)}
					onMouseEnter={arrowLeftFadeAnimation}
					onMouseLeave={arrowLeftFadeOutAnimation}
					className={`main__music-section-header main__section-header`}
				>
					<h2
						className={`main__left-arrow main__arrow  ${
							webSectionOpen === false && musicSectionOpen === false ? 'invisible' : ''
						}`}
						ref={(h2) => (arrowLeftContainer = h2)}
					>
						{'<<'}
					</h2>
					<h2 className={` main__section-header-title`}>Guitarist , Composer, Engineer</h2>
				</div>
			</div>
			<WebSection webSectionOpen={webSectionOpen} />
			<MusicSection musicSectionOpen={musicSectionOpen} />

			<a href={Resume} className={`main__resume`}>
				Resume
			</a>
			<Contact />
			<SocialButtons />
		</div>
	);
}

export default Main;
