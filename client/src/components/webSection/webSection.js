import React, { useContext } from 'react';
import './webSection.scss';
import NotYourThoughtsImage from '../../assets/not-your-thoughts-screencap.png';
import GitHubDark from '../../assets/Icons/silver/GitHub-silver.png';

export default function WebSection(webSectionOpen) {
	return (
		<div className={`webSection ${webSectionOpen.webSectionOpen ? '' : 'invisible'}`}>
			<h1 className={`webSection__projects-header`}>Projects</h1>
			<a href="http://www.notyourthoughts.com" className={`webSection__not-your-thoughts-header`}>
				{' '}
				Not Your Thoughts
			</a>
			<img
				className={`webSection__not-your-thoughts-image`}
				src={NotYourThoughtsImage}
				alt="not your thoughts preview image"
			/>
			<h3 className={`webSection__not-your-thoughts-description`}>
				<p>
					Not Your Thoughts is a mindfulness-based gamified journaling website dedicated to empowering the
					average human to develop a healthy relationship with the whirlwind of thoughts they find themselves
					inside daily.
				</p>
				Through a consistent daily journaling practice and engagement with mindfulness prompts, the user will
				unlock new modes, features, and achievements as they progress towards the solidification of their
				practice.<p>Developed by Eric Thorfinnson with React + Redux + Node + MondoDB </p>
			</h3>
			<a target="_blank" href="https://github.com/Ethorf/not-your-thoughts" className={`social-buttons__button`}>
				<img src={GitHubDark} className={`webSection__button-img github`} />
			</a>
		</div>
	);
}
