import React from 'react';
import './webSection.scss';
import NotYourThoughtsImage from '../../assets/not-your-thoughts-screencap.png';
import GitHubDark from '../../assets/Icons/silver/GitHub-silver.png';
import NYTVideo from '../../assets/NYT-preview-video-540.mp4';

export default function WebSection(webSectionOpen) {
	console.log(webSectionOpen.webSectionOpen);
	return (
		<div className={`webSection ${webSectionOpen.webSectionOpen ? 'visible' : 'invisible'}`}>
			<h1 className={`webSection__projects-header`}>Projects</h1>
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
					average human to develop a healthy relationship with the whirlwind of thoughts they find themselves
					inside daily.
				</p>
				Through a consistent daily journaling practice and engagement with mindfulness prompts, the user will
				unlock new modes, features, and achievements as they progress towards the solidification of their
				practice.<p>Developed by Eric Thorfinnson wirth React + Redux + Node + MondoDB </p>
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
	);
}
