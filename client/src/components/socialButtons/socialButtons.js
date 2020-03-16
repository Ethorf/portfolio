import React from 'react';
import './socialButtons.scss';
import InstagramDark from '../../assets/Icons/silver/instagram-silver.png';
import LinkedInDark from '../../assets/Icons/silver/linkedin-silver.png';
import GitHubDark from '../../assets/Icons/silver/GitHub-silver.png';
import BandcampDark from '../../assets/Icons/silver/bandcamp-silver.png';
import SoundcloudDark from '../../assets/Icons/silver/soundcloud-silver.png';

export default function SocialButtons() {
	return (
		<div className={`social-buttons`}>
			<a target="_blank" href="https://linkedin.com/ethorf" className={`social-buttons__button`}>
				<img className={`social-buttons__button-img`} src={LinkedInDark} />
			</a>
			<a target="_blank" href="https://github.com/ethorf" className={`social-buttons__button`}>
				<img className={`social-buttons__button-img`} src={GitHubDark} />
			</a>
			<a target="_blank" href="https://instagram.com/autocatband" className={`social-buttons__button`}>
				<img className={`social-buttons__button-img`} src={InstagramDark} />
			</a>
			<a target="_blank" href="https://ethorf.bandcamp.com" className={`social-buttons__button`}>
				<img className={`social-buttons__button-img`} src={BandcampDark} />
			</a>
			<a target="_blank" href="https://wwww.soundcloud.com/ethorf" className={`social-buttons__button`}>
				<img className={`social-buttons__button-img`} src={SoundcloudDark} />
			</a>
		</div>
	);
}
