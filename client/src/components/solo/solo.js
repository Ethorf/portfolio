import React from 'react';
import '../performance/performance.scss';
import '../../misc-styles/records.scss';
import QwagAlbumArt from '../../assets/album-art/eric-thorfinnson-qwag-artwork.jpg';
import JuanAlbumArt from '../../assets/album-art/eric-thorfinnson-juan-artwork.jpg';
import SoloGuitarAlbumArt from '../../assets/album-art/eric-thorfinnson-solo-guitar-artwork.jpg';
import BandcampIcon from '../../assets/Icons/silver/bandcamp-silver.png';
import SoundcloudIcon from '../../assets/Icons/silver/soundcloud-silver.png';
import SpotifyIcon from '../../assets/Icons/silver/spotify-silver.png';

export default function Solo(props) {
	return (
		<div className={`solo expanded-section ${props.soloOpen ? 'visible' : 'invisible'}`}>
			<div className={`records__header-back-container`}>
				<h1 className={`solo-header`}>Solo</h1>
				<h3 className={`records__back-button`} onClick={props.toggleSoloOpen}>
					{'<<'}
				</h3>
			</div>
			<h2 className={`records__section-header`}>Bio</h2>
			<h3 className={`records__bio-description`}>
				Eric Thorfinnson has been composing, recording, and releasing songs since he was roughly 12 years old.
				Many of these solo recordings are buried beneath the sands of time, hopefully never to be heard again,
				but in 2018 he decided to start releasing music under his name.
			</h3>
			<h2 className={`records__section-header`}>Records</h2>
			<div className={`records__album-container`}>
				<h2 className={`records__album-header`}>Qwag - LP - 2019</h2>
				<div className={`records__album-art-description-container`}>
					<img className={`records__album-artwork`} src={QwagAlbumArt} alt="Vicissitudes Album Artwork" />
					<ul className={`records__album-description`}>
						<li>Culmination and Remix/Master of singles released once a month for all of 2018</li>
						<li>Features 3 collaborations with Amy Beth Anders on Vocals</li>
						<li>
							"music that can be appreciated on so many levels, transcending the idiom of pop/folk and
							gently busting mental barriers as it plays"-Splendid Industries
						</li>
						<li>Artwork by Rachel Lindover</li>
						<li className={`records__links`}>
							<a rel="noopener noreferrer" target="_blank" href="https://ethorf.bandcamp.com/album/qwag">
								<img
									className={`records__link-icon bandcamp`}
									src={BandcampIcon}
									alt="solo vicissitudes bandcamp link"
								/>
							</a>
							<a rel="noopener noreferrer" target="_blank" href="https://soundcloud.com/ethorf">
								<img
									className={`records__link-icon soundcloud`}
									src={SoundcloudIcon}
									alt="records solo bandcamp link"
								/>
							</a>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://open.spotify.com/album/3qx1ZKIf8sKdPuUkoAPekr?si=bFWQE1jmQhCKGHJ6ZchtUg"
							>
								<img
									className={`records__link-icon spotify`}
									src={SpotifyIcon}
									alt="solo vicissitudes bandcamp link"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={`records__album-container`}>
				<h2 className={`records__album-header`}>Juan - EP - 2018</h2>
				<div className={`records__album-art-description-container`}>
					<img className={`records__album-artwork`} src={JuanAlbumArt} alt="Eponymous Album Artwork" />
					<ul className={`records__album-description`}>
						<li>First Official EP released that features Vocals</li>
						<li>All Instruments and Mixing by Eric Thorfinnson</li>
						<li className={`records__links`}>
							<a rel="noopener noreferrer" target="_blank" href="https://ethorf.bandcamp.com/album/juan">
								<img
									className={`records__link-icon bandcamp`}
									src={BandcampIcon}
									alt="solo solo bandcamp link"
								/>
							</a>
							<a rel="noopener noreferrer" target="_blank" href="https://soundcloud.com/ethorf">
								<img
									className={`records__link-icon soundcloud`}
									src={SoundcloudIcon}
									alt="solo solo soundcloud link"
								/>
							</a>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://open.spotify.com/album/349s7piUgnprZcNqic1SYt?si=WVK-u7i1QO2W-kNKj3DMTg"
							>
								<img
									className={`records__link-icon spotify`}
									src={SpotifyIcon}
									alt="solo vicissitudes bandcamp link"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={`records__album-container`}>
				<h2 className={`records__album-header`}>Solo Guitar - EP - 2018</h2>
				<div className={`records__album-art-description-container`}>
					<img className={`records__album-artwork`} src={SoloGuitarAlbumArt} alt="Eponymous Album Artwork" />
					<ul className={`records__album-description`}>
						<li>First completely instrumental Release</li>
						<li>Engineering and Guitar by Eric Thorfinnson</li>
						<li className={`records__links`}>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://ethorf.bandcamp.com/album/solo-guitar-ep"
							>
								<img
									className={`records__link-icon bandcamp`}
									src={BandcampIcon}
									alt="records records bandcamp link"
								/>
							</a>
							<a rel="noopener noreferrer" target="_blank" href="https://soundcloud.com/ethorf">
								<img
									className={`records__link-icon soundcloud`}
									src={SoundcloudIcon}
									alt="solo solo soundcloud link"
								/>
							</a>
							<a
								target="_blank"
								href="https://open.spotify.com/album/349s7piUgnprZcNqic1SYt?si=uqbHqyrDTxmF_AJmm6_DQg"
							>
								<img
									className={`records__link-icon spotify`}
									src={SpotifyIcon}
									alt="solo vicissitudes bandcamp link"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={`records__video-container`}>
				<h2 className={`records__section-header`}>Video</h2>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://www.youtube.com/channel/UChQemB3q8KLAKAixR63-AaQ/videos"
					className={`records__video-header`}
				>
					Eric Thorfinnson Youtube Channel
				</a>
			</div>
		</div>
	);
}
