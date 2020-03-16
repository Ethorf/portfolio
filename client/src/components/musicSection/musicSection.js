import React, { useContext, useState } from 'react';
import './musicSection.scss';
import NotYourThoughtsImage from '../../assets/not-your-thoughts-screencap.png';
import Performance from '../performance/performance.js';
import Engineering from '../engineering/engineering.js';

export default function MusicSection(musicSectionOpen) {
	let [performanceOpen, setPerformanceOpen] = useState(false);
	let [engineeringOpen, setEngineeringOpen] = useState(false);
	let [bothOpen, setBothOpen] = useState(false);
	const togglePerformanceOpen = () => {
		setPerformanceOpen(!performanceOpen);
	};
	const toggleEngineeringOpen = () => {
		setEngineeringOpen(!engineeringOpen);
	};

	return (
		<div className={`musicSection ${musicSectionOpen.musicSectionOpen ? '' : 'invisible'}`}>
			<div className={`musicSection__sections-header-container`}>
				<h1
					onClick={togglePerformanceOpen}
					className={`musicSection__sections-header musicSection__performance-header`}
				>
					Performance
				</h1>
				<h1
					onClick={toggleEngineeringOpen}
					className={`musicSection__sections-header musicSection__engineering-header`}
				>
					Engineering
				</h1>
			</div>
			<Performance open={performanceOpen} />
			<Engineering open={engineeringOpen} />
		</div>
	);
}
