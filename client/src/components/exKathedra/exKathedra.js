import React from 'react';
import './exKathedra.scss';
import '../performance/performance.scss';
import exKathedraAlbumArt from '../../assets/album-art/ex-kathedra-album-artwork.jpg';
import BandcampIcon from '../../assets/Icons/silver/bandcamp-silver.png';

export default function ExKathedra(props) {
	return (
		<div className={`exKathedra expanded-section ${props.exKathedraOpen ? '' : 'invisible'}`}>
			<h2 className={`exKathedra__section-header`}>Bio</h2>
			<h3 className={`exKathedra__bio-description`}>
				Ex Kathedra was formed in 2005 by Eric Thorfinnson, Rei Tanaka, Mike Gray, Alex Athaas, and Alex Medley.
				They were a progressive-metal band fueled exclusively by Delissio and House of Carters that played a
				series of shows around the GTA that were way more meaningful to the band members than anyone in the
				audience. They channeled all of their adolescent illusions of grandeur into the singular opus "This Is
				Where", and catastrophically imploded shortly thereafter.
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
