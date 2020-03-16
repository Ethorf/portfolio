import React, { useContext } from 'react';
import './webSection.scss';
import NotYourThoughtsImage from '../../assets/not-your-thoughts-screencap.png';

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
				Not Your Thoughts is a mindfulness-based gamified journaling website dedicated to empowering the average
				human to develop a healthy relationship with the whirlwind of thoughts they find themselves inside
				daily. Through a consistent daily journaling practice and engagement with mindfulness prompts, the user
				will unlock new modes, features, and achievements as they progress towards the solidification of their
				practice. Developed with React + Redux + Node + MondoDB{' '}
			</h3>
		</div>
	);
}
