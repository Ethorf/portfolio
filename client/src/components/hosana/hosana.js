import React from 'react';
import './hosana.scss';
import '../performance/performance.scss';

import HosanaAlbumArt from '../../assets/album-art/Hosana-AlbumArt(small).jpg';
import BandcampIcon from '../../assets/Icons/silver/bandcamp-silver.png';
import SoundcloudIcon from '../../assets/Icons/silver/soundcloud-silver.png';
import SpotifyIcon from '../../assets/Icons/silver/spotify-silver.png';

export default function Hosana(props) {
	return (
		<div className={`hosana expanded-section ${props.hosanaOpen ? '' : 'invisible'}`}>
			<h2 className={`hosana__section-header hosana__bio-header`}>Bio</h2>
			<h3 className={`hosana__bio-description`}>
				Hosana was formed in 2019 by Eric Thorfinnson and Scott Carruthers. They are an experimental indie band
				from Toronto, ON. Their eponymous EP harmonizes ethereal soundscapes with undercurrents of curated chaos
				while pawing at catharsis via hope, desperation and emergent madness
			</h3>
			<h2 className={`hosana__section-header`}>Records</h2>
			<div className={`hosana__album-container`}>
				<h2 className={`hosana__album-header`}>Hosana - EP - 2019</h2>
				<div className={`hosana__album-art-description-container`}>
					<img className={`hosana__album-artwork`} src={HosanaAlbumArt} alt="Hosana Album Artwork" />
					<ul className={`hosana__album-description`}>
						<li>Debut EP by Scott Carruthers and Eric Thorfinnson</li>
						<li>Vocals, Engineering, Mixing, and Guitar by Eric Thorfinnson</li>
						<li>Vocals by Scott Carruthers, Violin by Nicole Yoshimura</li>
						<li>
							"If you enjoy bands like Radiohead, Grizzly Bear, Sigur Rós and other like-minded bands this
							is essential new listening."-Divide and Conquer
						</li>
						<li>Artwork by Rachel Lindover</li>
						<li className={`hosana__links`}>
							<a rel="noopener noreferrer" target="_blank" href="https://hosana.bandcamp.com/">
								<img
									className={`hosana__link-icon bandcamp`}
									src={BandcampIcon}
									alt=" Hosana bandcamp link"
								/>
							</a>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://soundcloud.com/hosanaband/sets/hosana-ep"
							>
								<img
									className={`hosana__link-icon soundcloud`}
									src={SoundcloudIcon}
									alt="hosana Hosana bandcamp link"
								/>
							</a>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://open.spotify.com/album/4Y3jYwLiB5LMDCktFI1ZJf?si=8k9y_mV1Rn2rtSi2TMDQFA"
							>
								<img
									className={`hosana__link-icon spotify`}
									src={SpotifyIcon}
									alt="hosana Hosana bandcamp link"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
