import React, { useContext } from 'react';
import './engineering.scss';
import AmyAlbumArt from '../../assets/album-art/amy-beth-anders-before-you-artwork.jpg';
import SpotifyIcon from '../../assets/Icons/silver/spotify-silver.png';

export default function Engineering(open) {
	return (
		<div className={`engineering ${open.open ? '' : 'invisible'}`}>
			<div className={`engineering__sections-header-container`}>
				<h1 className={`engineering__sections-header engineering__engineering-header`}>
					Before You (EP)
					<p /> Amy Beth Anders - 2019
				</h1>

				<div className={`engineering__album-container`}>
					<img className={`engineering__album-artwork`} src={AmyAlbumArt} alt="Amy Album art"></img>
					<ul className={`engineering__links-container`}>
						<li>Debut Solo EP by Brooklyn Based Singer/Songwriter Amy Beth Anders</li>
						<li>Mixed & Mastered by Eric Thorfinnson</li>
						<li className={`engineering__links`}>
							<a
								target="_blank"
								href="https://open.spotify.com/album/6VjJQkI4L8Q1WyhcI2e9lM?si=SQXV95hMSeqiTTy_AKNo4g"
							>
								<img className={`engineering__link-icon`} src={SpotifyIcon} alt="Amy bandcamp link" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
