import React, { useRef, useState, useEffect } from 'react';
import { gsap, TimelineMax } from 'gsap';
import Loadable from 'react-loadable';
import { CSSPlugin } from 'gsap/CSSPlugin';
//Asset Imports
import Face from './assets/EricFacePopup-cropped.png';
import Resume from './assets//Eric-Thorfinnson-Resume.pdf';
//Component Imports
import MusicSection from './components/musicSection/musicSection.js';

import SocialButtons from './components/socialButtons/socialButtons';
import Contact from './components/contact/contact.js';
//Scss
import './main.scss';
// Function Imports
import {
	headersSmallFontSize,
	webAnimYAxis,
	webAnimXAxis,
	musicAnimXAxis,
	musicAnimYAxis,
	musicAnimSize,
	dividerNormalSize
} from './functions/animation-functions.js';

gsap.registerPlugin(CSSPlugin);

function MyLoadingComponent({ error }) {
	if (error) {
		return <div>Error!</div>;
	} else {
		return <div>Loading...</div>;
	}
}
const LoadableWebSection = Loadable({
	loader: () => import('./components/webSection/webSection.js'),
	loading: MyLoadingComponent
});

function Main() {
	const nameTl = new TimelineMax({ paused: true });
	const headersTl = new TimelineMax({ paused: true });
	const webHeaderTl = new TimelineMax({ paused: true });
	const musicHeaderTl = new TimelineMax({ paused: true });
	const faceTl = new TimelineMax({ paused: true });
	const dividerTl = new TimelineMax({ paused: true });
	const bioTl = new TimelineMax({ paused: true });
	const [headersAnimation, setHeadersAnimation] = useState(null);
	const [webSectionOpen, setWebSectionOpen] = useState(false);
	const [musicSectionOpen, setMusicSectionOpen] = useState(false);
	const [bothOpen, setBothOpen] = useState(true);
	const [webHeaderAnimation, setWebHeaderAnimation] = useState(null);
	const [musicHeaderAnimation, setMusicHeaderAnimation] = useState(null);
	const [dividerAnimation, setDividerAnimation] = useState(null);
	const [bioAnimation, setBioAnimation] = useState(null);
	const [faceOpen, setFaceOpen] = useState(null);
	const [nameSmall, setNameSmall] = useState(false);
	const [headersOpen, setHeadersOpen] = useState(false);
	const [bioOpen, setBioOpen] = useState(false);
	const [backButtonOpen, setBackButtonOpen] = useState(false);

	let nameContainer = useRef(null);
	let headersContainer = useRef(null);
	let webHeader = useRef(null);
	let webHeaderContainer = useRef(null);
	let musicHeaderContainer = useRef(null);
	let faceContainer = useRef(null);
	let dividerContainer = useRef(null);
	let bioContainer = useRef(null);
	const dur = 1.3;

	//Animation Execution Functions
	const webHeaderOpenAnimation = () => {
		if (webSectionOpen === false) {
			setWebHeaderAnimation(
				webHeaderTl
					.to(musicHeaderContainer, {
						duration: 0.8,
						x: 200,
						autoAlpha: 0,
						ease: 'power1.out'
					})
					.to(webHeaderContainer, {
						duration: 0.7,
						left: webAnimXAxis(),
						y: webAnimYAxis(),
						ease: 'power1.out'
					})
					.play()
			);
			setDividerAnimation(
				dividerTl.to(dividerContainer, { duration: dur, x: 260, autoAlpha: 0, fontSize: '0.4rem' }).play()
			);
			setWebSectionOpen(true);
			setBothOpen(false);
			setBackButtonOpen(true);
			nameSmallAnimation();
			faceAnimationClose();
		} else {
			setWebHeaderAnimation(
				webHeaderTl.to(webHeaderContainer, { duration: 0.8, left: '0%', position: 'relative', y: 0 }).play()
			);
			setMusicHeaderAnimation(
				musicHeaderTl
					.to(musicHeaderContainer, { duration: 0.1, x: 260 })
					.to(musicHeaderContainer, { duration: 1.2, x: 0, autoAlpha: 1 })
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, { duration: 1.2, x: 0, autoAlpha: 1, fontSize: dividerNormalSize() })
					.play()
			);
			setWebSectionOpen(false);
			setBothOpen(true);
			setBackButtonOpen(false);
			nameSmallAnimation();
			faceAnimationOpen();
		}
	};
	const musicHeaderOpenAnimation = () => {
		if (musicSectionOpen === false) {
			setMusicHeaderAnimation(
				musicHeaderTl
					.to(webHeaderContainer, {
						duration: 0.8,
						x: -200,
						autoAlpha: 0,
						ease: 'power1.out'
					})
					.to(musicHeaderContainer, {
						duration: 0.7,
						right: musicAnimXAxis(),
						y: musicAnimYAxis(),
						ease: 'power1.out'
					})
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, { duration: dur, x: musicAnimSize(), autoAlpha: 0, fontSize: '0.4rem' })
					.play()
			);
			setMusicSectionOpen(true);
			setBothOpen(false);
			setBackButtonOpen(true);
			nameSmallAnimation();
			faceAnimationClose();
		} else {
			setWebHeaderAnimation(webHeaderTl.to(webHeaderContainer, { duration: dur, x: 1, autoAlpha: 1 }).play());
			setMusicHeaderAnimation(
				musicHeaderTl
					.to(musicHeaderContainer, {
						duration: 0.8,
						right: '0%',
						position: 'relative',
						y: 0,
						fontSize: headersSmallFontSize()
					})
					.to(musicHeaderContainer, { duration: 0.5 })
					.play()
			);
			setDividerAnimation(
				dividerTl
					.to(dividerContainer, { duration: dur, x: 0, autoAlpha: 0.9, fontSize: dividerNormalSize() })
					.play()
			);
			setMusicSectionOpen(false);
			setBothOpen(true);
			setBackButtonOpen(false);
			nameSmallAnimation();
			faceAnimationOpen();
		}
	};
	//Face Anims
	const faceAnimationOpen = () => {
		setFaceOpen(
			faceTl
				.from(faceContainer, { duration: 1.2, y: 250 })
				.to(faceContainer, { duration: 1.5, y: -50, opacity: 0.8 })
				.play()
		);
	};
	const faceAnimationClose = () => {
		setFaceOpen(faceTl.to(faceContainer, { duration: 1, y: 50, opacity: 0 }).play());
	};
	const toggleHeadersOpen = () => {
		setHeadersOpen(!headersOpen);
	};
	const toggleBioOpen = () => {
		setBioOpen(!bioOpen);
		if (bioOpen === false) {
			setBioAnimation(
				bioTl
					.to(bioContainer, { duration: 0.01, display: 'block', opacity: 0 })
					.to(bioContainer, { duration: 0.5, opacity: 1 })
					.play()
			);
		} else {
			setBioAnimation(
				bioTl
					.to(bioContainer, { duration: 0.7, opacity: 0 })
					.to(bioContainer, { duration: 0.7, display: 'none' })

					.play()
			);
		}
	};
	const toggleBackButtonOpen = () => {
		setBackButtonOpen(!backButtonOpen);
	};
	const toggleNameSmall = () => {
		setNameSmall(!nameSmall);
	};
	const headersLoadAnimation = () => {
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
	const nameSmallAnimation = () => {
		if (nameSmall) {
			nameTl.to(nameContainer, { duration: 1.2, top: '50%', autoAlpha: 1 }).play();
			faceTl.to(faceContainer, { duration: 1.2, opacity: 1 });
			toggleNameSmall();
			setBackButtonOpen(true);
		} else {
			nameTl
				.to(nameContainer, { duration: 1.2, top: '-50%' })
				.to(nameContainer, { duration: 0.2, autoAlpha: 0 })
				.play();
			faceTl.to(faceContainer, { duration: 1.2, opacity: 0 });
			toggleNameSmall();
			setBackButtonOpen(false);
		}
	};
	const backButton = () => {
		if (webSectionOpen) {
			webHeaderOpenAnimation();
		} else {
			musicHeaderOpenAnimation();
		}
	};
	useEffect(() => {
		headersLoadAnimation();
		faceAnimationOpen();
	}, []);
	// console.log(window.innerWidth);
	return (
		<div className="main">
			<div className="grid__quadrant grid__top-left"></div>
			<div className="grid__quadrant grid__top-right"></div>
			<div className="grid__quadrant grid__bottom-right"></div>
			<div className="grid__quadrant grid__bottom-left"></div>

			<div className={`main__bg`} />
			<img ref={(img) => (faceContainer = img)} className={`main__face-img`} src={Face} />
			<header className="main__header-container">
				<a ref={(h1) => (nameContainer = h1)} className={`main__header`} href="http://www.ethorf.com">
					Eric Thorfinnson
				</a>
				<a
					className={`main__ethorf-header main__ethorf-header-left ${
						webSectionOpen ? 'visible' : 'invisible'
					}`}
					href="http://www.ethorf.com"
				>
					Ethorf
				</a>
				<a
					className={`main__ethorf-header main__ethorf-header-right ${
						musicSectionOpen ? 'visible' : 'invisible'
					}`}
					href="http://www.ethorf.com"
				>
					Ethorf
				</a>
				<h3
					onClick={backButton}
					className={`
					main__back-button
					${webSectionOpen || musicSectionOpen ? 'visible' : 'invisible'}
					 ${webSectionOpen ? 'main__back-button-left' : ''}
					 ${musicSectionOpen ? 'main__back-button-right' : ''}

				`}
				>
					{`${webSectionOpen ? '<<' : '>>'}`}
				</h3>
			</header>

			<div ref={(div) => (headersContainer = div)} className={`main__headers-container`}>
				<div
					onClick={webSectionOpen ? '' : webHeaderOpenAnimation}
					ref={(h2) => (webHeaderContainer = h2)}
					a
					className={`main__web-section-header main__section-header-container
					${webSectionOpen ? 'main__section-open-left-underline' : ''}
					`}
				>
					<h2
						ref={(h2) => (webHeader = h2)}
						className={`main__web-header-title
						 ${webSectionOpen ? 'default-cursor' : 'hover-underline-left'}
						 `}
					>
						{window.innerWidth < 768 ? 'Developer' : ' Full-stack Web Developer'}
					</h2>
				</div>
				<h2 className={`main__section-divider`} ref={(h2) => (dividerContainer = h2)}>
					||{' '}
				</h2>
				<div
					onClick={musicSectionOpen ? '' : musicHeaderOpenAnimation}
					ref={(h2) => (musicHeaderContainer = h2)}
					className={`main__music-section-header main__section-header-container
					${musicSectionOpen ? 'main__section-open-right-underline' : ''}
					
					`}
				>
					<h2
						className={`main__music-header-title ${
							musicSectionOpen ? 'default-cursor' : 'hover-underline-right'
						} `}
					>
						{window.innerWidth < 768 ? 'Musician' : 'Guitarist, Composer, Engineer'}
					</h2>
				</div>
			</div>
			<LoadableWebSection webSectionOpen={webSectionOpen} />
			<MusicSection
				musicSectionOpen={musicSectionOpen}
				nameSmallAnimation={nameSmallAnimation}
				faceAnimationClose={faceAnimationClose}
				faceAnimationOpen={faceAnimationOpen}
				toggleBackButtonOpen={toggleBackButtonOpen}
			/>
			<div
				className={`main__bio-resume-contact-container
			 ${webSectionOpen || musicSectionOpen ? 'invisible' : ''}
			 `}
			>
				<div className={`main__bio-container ${webSectionOpen || musicSectionOpen ? 'invisible' : ''}`}>
					<h2 onClick={bioOpen ? null : toggleBioOpen} className={'main__bio-header'}>
						Bio
					</h2>

					<div ref={(div) => (bioContainer = div)} className={`main__bio-description`}>
						<p>
							I'm a Toronto-based Web Developer and Musician. I began coding as an extension of my
							preternatural obsession with videogames at around age 10, and have been an avid guitar
							player, composer, and general recording nerd since about 13.
						</p>
						<p>
							I'm a compassionately pretentious coffee nerd, omnivorous beer neophilliac, and an
							incorrigble glutton for literature. I am also an avid meditator who is for better or worse
							deeply convinced in the power of mindfulness to effect positive change. I would love nothing
							more than to help empower people through technology, and perhaps churn out a tasty riff or
							two along the way.
						</p>
						<button className={`main__bio-close-button`} onClick={toggleBioOpen}>
							close x
						</button>
					</div>
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
		</div>
	);
}

export default Main;
