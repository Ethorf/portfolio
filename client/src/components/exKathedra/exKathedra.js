import React from 'react';
import '../performance/performance.scss';
import '../../misc-styles/records.scss';
import exKathedraAlbumArt from '../../assets/album-art/ex-kathedra-album-artwork.jpg';
import BandcampIcon from '../../assets/Icons/silver/bandcamp-silver.png';

export default function ExKathedra(props) {
	return (
		<div className={`exKathedra expanded-section ${props.exKathedraOpen ? 'visible' : 'invisible'}`}>
			<div className={`records__header-back-container`}>
				<h1 className={`ex-kathedra-header`}>Ex Kathedra</h1>
				<h3 className={`records__back-button`} onClick={props.toggleExKathedraOpen}>
					{'<<'}
				</h3>
			</div>

			<h2 className={`records__section-header records__bio-header`}>Bio</h2>
			<h3 className={`records__bio-description`}>
				Ex Kathedra was formed in 2005 by Eric Thorfinnson, Rei Tanaka, Mike Gray, Alex Athaas, and Alex Medley.
				They were a progressive-metal band fueled exclusively by Delissio and House of Carters.
				<p /> They played a series of shows throughout the GTA that were way more meaningful to the band members
				than anyone in the audience. They channeled all of their adolescent illusions of grandeur into the
				singular opus "This Is Where", and catastrophically imploded shortly thereafter.
			</h3>
			<h2 className={`records__section-header`}>Records</h2>
			<div className={`records__album-container`}>
				<h2 className={`records__album-header`}>This Is Where - LP - 2007</h2>
				<div className={`records__album-art-description-container`}>
					<img className={`records__album-artwork`} src={exKathedraAlbumArt} alt="exKathedra Album Artwork" />
					<ul className={`records__album-description`}>
						<li>
							First LP ever released by Eric Thorfinnson, recorded all Guitar, some Vox, and some bass
						</li>
						<li>Bass and Clean Vox by Rei Tanaka, Screams by Alex Medley, and Drums by Alex Medley</li>
						<li>Recorded / Mixed / Mastered at Mastermind Studios in Hamilton, ON </li>

						<li>"Good if not exactly my thing - 80%."-Noktorn</li>
						<li>Artwork by Wyatt Clough</li>
						<li className={`records__links`}>
							<a rel="noopener noreferrer" target="_blank" href="https://exkathedra.bandcamp.com/">
								<img
									className={`records__link-icon bandcamp`}
									src={BandcampIcon}
									alt=" exka bandcamp link"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
