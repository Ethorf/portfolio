import React from 'react';
import './socialButtons.scss';
import InstagramDark from '../../assets/Icons/silver/instagram-silver.png';
import LinkedInDark from '../../assets/Icons/silver/linkedin-silver.png';
import GitHubDark from '../../assets/Icons/silver/GitHub-silver.png';
import BandcampDark from '../../assets/Icons/silver/bandcamp-silver.png';
import SoundcloudDark from '../../assets/Icons/silver/soundcloud-silver.png';

export default function SocialButtons(props) {
	return (
		<div className={`social-buttons ${props.webSectionOpen || props.musicSectionOpen ? 'invisible' : ''}`}>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://www.linkedin.com/in/ericthorfinnson/"
				className={`social-buttons__button`}
			>
				<img src={LinkedInDark} className={`social-buttons__button-img linkedin`} />
			</a>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://github.com/ethorf"
				className={`social-buttons__button`}
			>
				<img src={GitHubDark} className={`social-buttons__button-img github`} />
			</a>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://instagram.com/autocatband"
				className={`social-buttons__button`}
			>
				<img src={InstagramDark} className={`social-buttons__button-img instagram`} />
			</a>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://ethorf.bandcamp.com"
				className={`social-buttons__button`}
			>
				<img src={BandcampDark} className={`social-buttons__button-img bandcamp`} />
			</a>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://wwww.soundcloud.com/ethorf"
				className={`social-buttons__button`}
			>
				<img src={SoundcloudDark} className={`social-buttons__button-img soundcloud`} />
			</a>
		</div>
	);
}
