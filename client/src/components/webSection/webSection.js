import React from 'react';
import './webSection.scss';
import NotYourThoughtsImage from '../../assets/not-your-thoughts-screencap.png';
import GitHubDark from '../../assets/Icons/silver/GitHub-silver.png';
import NYTVideo from '../../assets/NYT-preview-video-540.mp4';
import feelScreenshot from '../../assets/feel-screenshot.png';
import bigDealScreenshot from '../../assets/bigdeal-screenshot.png';

export default function WebSection(webSectionOpen) {
	return (
		<div className={`webSection ${webSectionOpen.webSectionOpen ? 'visible' : 'invisible'}`}>
			<h1 className={`webSection__projects-header`}>Projects</h1>
			<div className={`webSection__project-container`}>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="http://www.notyourthoughts.com"
					className={`webSection__not-your-thoughts-header`}
				>
					{' '}
					Not Your Thoughts
				</a>
				<video
					className={`webSection__not-your-thoughts-image`}
					poster={NotYourThoughtsImage}
					src={NYTVideo}
					alt="not your thoughts preview image"
					onMouseOver={(event) => event.target.play()}
					onMouseOut={(event) => event.target.pause()}
					loop="true"
				/>
				<h3 className={`webSection__not-your-thoughts-description`}>
					<p>
						Not Your Thoughts is a mindfulness-based gamified journaling website dedicated to empowering the
						average human to develop a healthy relationship with the whirlwind of thoughts they find
						themselves inside daily.
					</p>
					Through a consistent daily journaling practice and engagement with mindfulness prompts, the user
					will unlock new modes, features, and achievements as they progress towards the solidification of
					their practice.<p>Developed by Eric Thorfinnson with React + Redux + Node/Express + MongoDB </p>
				</h3>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://github.com/Ethorf/not-your-thoughts"
					className={`social-buttons__button`}
				>
					<img src={GitHubDark} className={`webSection__button-img github`} />
				</a>
			</div>
			<div className={`webSection__project-container`}>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://mighty-anchorage-10642.herokuapp.com/ "
					className={`webSection__not-your-thoughts-header webSection__feel-header  `}
				>
					{' '}
					Feel - Thai Massage & Yoga
				</a>
				<img
					className={`webSection__not-your-thoughts-image webSection__feel-image`}
					src={feelScreenshot}
					alt="feel preview "
				/>
				<h3 className={`webSection__not-your-thoughts-description`}>
					<p>
						Website for Stjärnsund, Sweden based Yoga studio.
						<p>Developed by Eric Thorfinnson with React + Node/Express + Postgres </p>
					</p>
				</h3>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://github.com/Ethorf/feel"
					className={`social-buttons__button`}
				>
					<img src={GitHubDark} className={`webSection__button-img github`} />
				</a>
			</div>
			<div className={`webSection__project-container`}>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://bigdeal-app.herokuapp.com/"
					className={`webSection__not-your-thoughts-header webSection__feel-header  `}
				>
					{' '}
					BigDeal
				</a>
				<img
					className={`webSection__not-your-thoughts-image webSection__feel-image`}
					src={bigDealScreenshot}
					alt="bigDeal preview "
				/>

				<h3 className={`webSection__not-your-thoughts-description`}>
					<p>
						BigDeal is a web app developed as part of the Hatchways co-op program. Utilizing web-scraping
						via Puppeteer.js, it allows users to create shopping lists and receive automated price updates
						on products they are tracking. They are also able to follow other users and view their shopping
						lists.{' '}
					</p>
					<p>Tech Stack: React + Node/Express + MongoDB </p>
				</h3>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://github.com/hatchways/team-watermelon"
					className={`social-buttons__button`}
				>
					<img src={GitHubDark} className={`webSection__button-img github`} />
				</a>
			</div>
		</div>
	);
}
