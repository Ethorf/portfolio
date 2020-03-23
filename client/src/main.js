import React, { useRef, useState, useEffect } from 'react';
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
	const nameTl = new TimelineMax({ paused: true });
	const headersTl = new TimelineMax({ paused: true });
	const webHeaderTl = new TimelineMax({ paused: true });
	const musicHeaderTl = new TimelineMax({ paused: true });
	const faceTl = new TimelineMax({ paused: true });
	const dividerTl = new TimelineMax({ paused: true });
	const arrowTl = new TimelineMax({ paused: true });
	const [headersAnimation, setHeadersAnimation] = useState(null);
	let [webSectionOpen, setWebSectionOpen] = useState(false);
	let [musicSectionOpen, setMusicSectionOpen] = useState(false);
	let [bothOpen, setBothOpen] = useState(true);
	const [webHeaderAnimation, setWebHeaderAnimation] = useState(null);
	const [musicHeaderAnimation, setMusicHeaderAnimation] = useState(null);
	const [dividerAnimation, setDividerAnimation] = useState(null);
	const [faceOpen, setFaceOpen] = useState(null);
	const [arrowFade, setArrowFade] = useState(null);
	const [nameSmall, setNameSmall] = useState(false);
	const [headersOpen, setHeadersOpen] = useState(false);
	const [bioOpen, setBioOpen] = useState(false);
	let nameContainer = useRef(null);
	let headersContainer = useRef(null);
	let webHeaderContainer = useRef(null);
	let musicHeaderContainer = useRef(null);
	let webHeaderContainerMobile = useRef(null);
	let musicHeaderContainerMobile = useRef(null);
	let headersContainerMobile = useRef(null);
	let faceContainer = useRef(null);
	let dividerContainer = useRef(null);
	let dividerContainerMobile = useRef(null);
	let arrowRightContainer = useRef(null);
	let arrowLeftContainer = useRef(null);

	const headerMobileAnimXMovement = '23vw';

	const webHeaderOpenAnimationMobile = () => {
		if (webSectionOpen === false) {
			setWebHeaderAnimation(
				webHeaderTl
					.to(webHeaderContainerMobile, {
						duration: 1.2,
						x: headerMobileAnimXMovement,
						justifySelf: 'center'
					})
					.play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainerMobile, { duration: 1.2, x: 260, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setMusicHeaderAnimation(
				musicHeaderTl.to(musicHeaderContainerMobile, { duration: 1.2, x: 280, opacity: 0 }).play()
			);
			setWebSectionOpen(true);
			setBothOpen(false);
		} else {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainerMobile, { duration: 1.2, x: 1 }).play());
			setMusicHeaderAnimation(
				musicHeaderTl.to(musicHeaderContainerMobile, { duration: 1.2, x: 1, opacity: 1 }).play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainerMobile, { duration: 1.2, x: 1, opacity: 0.9, fontSize: '1.8rem' }).play()
			);
			setWebSectionOpen(false);
			setBothOpen(true);
		}
	};
	const musicHeaderOpenAnimationMobile = () => {
		if (musicSectionOpen === false) {
			setWebHeaderAnimation(
				webHeaderTl.to(webHeaderContainerMobile, { duration: 1.2, x: '-25vw', opacity: 0 }).play()
			);
			setMusicHeaderAnimation(musicHeaderTl.to(musicHeaderContainerMobile, { duration: 1, x: '-25vw' }).play());
			setDividerAnimation(
				dividerTl.to(dividerContainerMobile, { duration: 1.2, x: -200, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setMusicSectionOpen(true);
			setBothOpen(false);
		} else {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainerMobile, { duration: 1, x: 0, opacity: 1 }).play());
			setMusicHeaderAnimation(musicHeaderTl.to(musicHeaderContainerMobile, { duration: 1, x: 0 }).play());
			setDividerAnimation(
				dividerTl.to(dividerContainerMobile, { duration: 1, x: 0, opacity: 0.9, fontSize: '1.8rem' }).play()
			);
			setMusicSectionOpen(false);
			setBothOpen(true);
		}
	};
	const webHeaderOpenAnimation = () => {
		if (webSectionOpen === false) {
			setWebHeaderAnimation(
				webHeaderTl.to(webHeaderContainer, { duration: 1.2, x: 300, justifySelf: 'center' }).play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: 260, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setMusicHeaderAnimation(
				musicHeaderTl.to(musicHeaderContainer, { duration: 1.2, x: 280, opacity: 0 }).play()
			);
			setWebSectionOpen(true);
			setBothOpen(false);
		} else {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainer, { duration: 1.2, x: 1 }).play());
			setMusicHeaderAnimation(musicHeaderTl.to(musicHeaderContainer, { duration: 1.2, x: 1, opacity: 1 }).play());
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: 1, opacity: 0.9, fontSize: '2.8rem' }).play()
			);
			setWebSectionOpen(false);
			setBothOpen(true);
		}
	};
	const musicHeaderOpenAnimation = () => {
		if (musicSectionOpen === false) {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainer, { duration: 1.2, x: -270, opacity: 0 }).play());
			setMusicHeaderAnimation(musicHeaderTl.to(musicHeaderContainer, { duration: 1, x: -270 }).play());
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1.2, x: -200, opacity: 0, fontSize: '0.4rem' }).play()
			);
			setMusicSectionOpen(true);
			setBothOpen(false);
		} else {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainer, { duration: 1, x: 0, opacity: 1 }).play());
			setMusicHeaderAnimation(musicHeaderTl.to(musicHeaderContainer, { duration: 1, x: 0 }).play());
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: 1, x: 0, opacity: 0.9, fontSize: '2.8rem' }).play()
			);
			setMusicSectionOpen(false);
			setBothOpen(true);
		}
	};
	const musicHeaderFadeOutAnimation = () => {
		setMusicHeaderAnimation(
			musicHeaderTl
				.to(headersContainerMobile, { duration: 0.5, opacity: 0, y: '-10vh' })
				.to(headersContainerMobile, { display: 'none' })
				.play()
		);
	};
	const musicHeaderFadeInAnimation = () => {
		setMusicHeaderAnimation(
			musicHeaderTl
				.to(headersContainerMobile, { display: 'flex' })
				.to(headersContainerMobile, { duration: 1, opacity: 1, y: 0 })
				.play()
		);
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
		if (!nameSmall) {
			setFaceOpen(
				faceTl
					.from(faceContainer, { duration: 0.2, y: 250 })
					.to(faceContainer, { duration: 1.5, y: -50, opacity: 0.8 })
					.play()
			);
		}
	};
	const faceAnimationClose = () => {
		setFaceOpen(faceTl.to(faceContainer, { duration: 1, y: 50, opacity: 0 }).play());
	};
	const toggleHeadersOpen = () => {
		setHeadersOpen(!headersOpen);
	};
	const toggleBioOpen = () => {
		setBioOpen(!bioOpen);
	};
	const toggleNameSmall = () => {
		setNameSmall(!nameSmall);
	};

	const headersContainerAnimation = () => {
		if (headersOpen) {
			setHeadersAnimation(headersTl.to(headersContainer, { height: '0px', duration: 1.2, opacity: 0 }).play());
			setMusicHeaderAnimation(
				musicHeaderTl
					.to(musicHeaderContainer, { height: '0px', duration: 1, x: 280 })

					.play()
			);
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainer, { duration: 1, x: -280 }).play());
			toggleHeadersOpen();
		} else {
			setHeadersAnimation(headersTl.to(headersContainer, { duration: 1.2, opacity: 1, x: 0 }).play());
			setMusicHeaderAnimation(
				musicHeaderTl
					.from(musicHeaderContainer, { duration: 1, x: 280 })
					.to(musicHeaderContainer, { duration: 1, x: 0 })
					.play()
			);
			setWebHeaderAnimation(
				webHeaderTl
					.from(webHeaderContainer, { duration: 1, x: -280 })
					.to(webHeaderContainer, { duration: 0.5, x: 0 })
					.play()
			);
			toggleHeadersOpen();
		}
	};

	const headersContainerMusicOpenAnimation = () => {
		if (headersOpen) {
			setHeadersAnimation(
				headersTl.to(headersContainer, { height: '0px', y: -100, duration: 0.5, opacity: 0 }).play()
			);
			toggleHeadersOpen();
		} else {
			setHeadersAnimation(
				headersTl.to(headersContainer, { height: '10vh', y: 0, duration: 0.5, opacity: 1 }).play()
			);
			toggleHeadersOpen();
		}
	};
	const nameSmallAnimation = () => {
		if (nameSmall) {
			nameTl.to(nameContainer, { duration: 1.2, fontSize: '4.4rem' }).play();
			faceTl.to(faceContainer, { duration: 1.2, width: '11vw', height: '12vh', top: '12vh' });

			toggleNameSmall();
		} else {
			nameTl.to(nameContainer, { duration: 1.2, fontSize: '2.4rem', marginTop: '-4vh' }).play();
			faceTl.to(faceContainer, { opacity: 0 });
			toggleNameSmall();
		}
	};
	useEffect(() => {
		headersContainerAnimation();
	}, []);
	return (
		<div className="main">
			<div className={`main__bg`}></div>

			<header className="main__header-container">
				<img ref={(img) => (faceContainer = img)} className={`main__face-img`} src={Face} />
				<a
					ref={(h1) => (nameContainer = h1)}
					onMouseEnter={faceAnimationOpen}
					onMouseLeave={faceAnimationClose}
					className="main__header"
					href="http://localhost:3000"
				>
					Eric Thorfinnson
				</a>
				{/* <button className={'test-button'} onClick={musicHeaderFadeOutAnimation}>
					Test
				</button> */}
			</header>

			<div ref={(div) => (headersContainer = div)} className={`main__headers-container`}>
				<div
					onClick={webHeaderOpenAnimation}
					onMouseEnter={arrowRightFadeAnimation}
					onMouseLeave={arrowRightFadeOutAnimation}
					ref={(h2) => (webHeaderContainer = h2)}
					className={`main__web-section-header main__section-header`}
				>
					<h2 className={`main__web-header-title`}>Full-stack Web Developer</h2>
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
					<h2 className={` main__music-header-title`}>Guitarist, Composer, Engineer</h2>
				</div>
			</div>
			{/* Mobile Headers */}
			<div ref={(div) => (headersContainerMobile = div)} className={`main__headers-container-mobile`}>
				<div
					onClick={webHeaderOpenAnimationMobile}
					ref={(h2) => (webHeaderContainerMobile = h2)}
					className={`main__web-section-header main__section-header`}
				>
					<h2 className={`main__web-header-title`}>Developer</h2>
				</div>
				<h2 className={`main__section-divider`} ref={(h2) => (dividerContainerMobile = h2)}>
					||{' '}
				</h2>

				<div
					onClick={musicHeaderOpenAnimationMobile}
					ref={(h2) => (musicHeaderContainerMobile = h2)}
					className={`main__music-section-header main__section-header`}
				>
					<h2
						className={`main__left-arrow main__arrow  ${
							webSectionOpen === false && musicSectionOpen === false ? 'invisible' : ''
						}`}
						// ref={(h2) => (arrowLeftContainer = h2)}
					>
						{'<<'}
					</h2>
					<h2 className={` main__music-header-title`}>Musician</h2>
				</div>
			</div>
			<WebSection headersContainerAnimation={headersContainerAnimation} webSectionOpen={webSectionOpen} />
			<MusicSection
				headersContainerMusicOpenAnimation={headersContainerMusicOpenAnimation}
				musicSectionOpen={musicSectionOpen}
				nameSmallAnimation={nameSmallAnimation}
				musicHeaderFadeInAnimation={musicHeaderFadeInAnimation}
				musicHeaderFadeOutAnimation={musicHeaderFadeOutAnimation}
			/>
			<div className={`main__bio-container ${webSectionOpen || musicSectionOpen ? 'invisible' : ''}`}>
				<h2 onClick={toggleBioOpen} className={'main__bio-header'}>
					Bio
				</h2>
				<p className={`main__bio-description ${bioOpen ? 'bio-visible' : 'bio-invisible'}`}>
					I'm a Toronto-based Web Developer and Musician. I began coding as an extension of my preternatural
					obsession with videogames at around age 10, and have been an avid guitar player, composer, and
					general recording nerd since about 13.
					<p /> I'm a compassionately pretentious coffee nerd, omnivorous beer neophilliac, and an incorrigble
					glutton for literature. I am also an avid meditator who is for better or worse deeply convinced in
					the power of mindfulness to effect positive change. I would love nothing more than to help empower
					people through technology, and perhaps churn out a tasty riff or two along the way.{' '}
				</p>
			</div>
			<a
				target="_blank"
				href={Resume}
				className={`main__resume hover hover-1 ${webSectionOpen || musicSectionOpen ? 'invisible' : ''}`}
			>
				Resume
			</a>

			<Contact webSectionOpen={webSectionOpen} musicSectionOpen={musicSectionOpen} />
			<SocialButtons webSectionOpen={webSectionOpen} musicSectionOpen={musicSectionOpen} />
		</div>
	);
}

export default Main;
