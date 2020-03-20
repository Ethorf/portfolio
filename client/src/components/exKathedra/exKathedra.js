import React from 'react';
import './exKathedra.scss';
import exKathedraAlbumArt from '../../assets/album-art/ex-kathedra-album-artwork.jpg';
import BandcampIcon from '../../assets/Icons/silver/bandcamp-silver.png';

export default function ExKathedra(props) {
	return (
		<div className={`exKathedra ${props.exKathedraOpen ? '' : 'invisible'}`}>
			<h2 className={`exKathedra__section-header`}>Bio</h2>
			<h3 className={`exKathedra__bio-description`}>
				Ex Kathedra was formed in 2005 by Eric Thorfinnson, Rei Tanaka, Mike Gray, Alex Athaas, and Alex Medley.
				They are an experimental indie band from Toronto, ON. Their eponymous EP harmonizes ethereal soundscapes
				with undercurrents of curated chaos while pawing at catharsis via hope, desperation and emergent madness
			</h3>
			<h2 className={`exKathedra__section-header`}>Records</h2>
			<div className={`exKathedra__album-container`}>
				<h2 className={`exKathedra__album-header`}>This Is Where - LP - 2007</h2>
				<div className={`exKathedra__album-art-description-container`}>
					<img
						className={`exKathedra__album-artwork`}
						src={exKathedraAlbumArt}
						alt="exKathedra Album Artwork"
					/>
					<ul className={`exKathedra__album-description`}>
						<li>First LP ever released by Eric Thorfinnson</li>
						<li>Vocals, Engineering, Mixing, and Guitar by Eric Thorfinnson</li>
						<li>Vocals by Scott Carruthers, Violin by Nicole Yoshimura</li>
						<li>"Good if not exactly my thing - 80%."-Noktorn</li>
						<li>Artwork by Wyatt Clough</li>
						<li className={`exKathedra__links`}>
							<a target="_blank" href="https://exkathedra.bandcamp.com/">
								<img
									className={`exKathedra__link-icon bandcamp`}
									src={BandcampIcon}
									alt=" exKathedra bandcamp link"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
