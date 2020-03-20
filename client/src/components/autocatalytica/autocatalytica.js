import React from 'react';
import YouTube from 'react-youtube';
import './autocatalytica.scss';
import '../performance/performance.scss';
import VicissitudesAlbumArt from '../../assets/album-art/autocatalytica-vicissitudes-artwork.jpg';
import AutocatalyticaAlbumArt from '../../assets/album-art/autocatalytica-eponymous-artwork.jpg';
import HorrorVacuiAlbumArt from '../../assets/album-art/autocatalytica-horror-vacui-artwork.jpg';
import BandcampIcon from '../../assets/Icons/silver/bandcamp-silver.png';
import SoundcloudIcon from '../../assets/Icons/silver/soundcloud-silver.png';
import SpotifyIcon from '../../assets/Icons/silver/spotify-silver.png';

export default function Autocatalytica(props) {
	const opts = {
		playerVars: {
			autoplay: 0
		}
	};
	return (
		<div className={`expanded-section autocatalytica ${props.autocatalyticaOpen ? '' : 'invisible'}`}>
			<h2 className={`autocatalytica__section-header`}>Bio</h2>
			<h3 className={`autocatalytica__bio-description`}>
				Autocatalytica was formed in 2009 as Eric Thorfinnson's neo-post-progressive-grind-funk bedroom project.
				Upon starting school at the Berklee College of Music in Boston, MA, Eric was joined by Drummer Emmett
				Ceglia, Guitarist Erik Sorensen,and a veritable smattering of bassists.
			</h3>
			<h3 className={`autocatalytica__bio-description`}>
				{' '}
				After releasing their first EP "Horror Vacui" in 2012, the group began a tumultuous migration to
				Brooklyn, where they released their first LP and played persistently in the local scene. The group began
				writing/recording their second LP , "Vicissitudes" in 2014, under the shadow of bandleader Eric
				Thorfinnson's impending export back to his native Canada .
			</h3>
			<h3 className={`autocatalytica__bio-description`}>
				{' '}
				Tragically, on October 22nd 2015, Guitarist Erik Sorensen suddenly passed away. The group played one
				more show before disbanding it's Brooklyn-based iteration. Currently, Eric is putting the finishing
				touches on a 3rd EP featuring a smattering of collaborators, including drummer Neilroy Miranda.
			</h3>
			<h2 className={`autocatalytica__section-header autocatalytica__records-header`}>Records</h2>
			<div className={`autocatalytica__album-container`}>
				<h2 className={`autocatalytica__album-header`}>Vicissitudes - LP - 2016</h2>
				<div className={`autocatalytica__album-art-description-container`}>
					<img
						className={`autocatalytica__album-artwork`}
						src={VicissitudesAlbumArt}
						alt="Vicissitudes Album Artwork"
					/>
					<ul className={`autocatalytica__album-description`}>
						<li>
							Final Record with US-based lineup, including Emmett Ceglia on Drums, Will Purcell on Bass
							and the last recordings of Guitarist Erik Sorensen before his passing on Oct 22nd, 2015
						</li>
						<li>Vocals, Engineering, Mixing, and Guitar by Eric Thorfinnson</li>
						<li>"Fabulously unique and always thrilling"-Metal Trenches</li>
						<li>"Amazing avant-garde deathgrind"-Can This Even Be Called Music?</li>
						<li>Artwork by Rachel Lindover</li>
						<li className={`autocatalytica__links`}>
							<div>
								<a target="_blank" href="https://autocatalytica.bandcamp.com/album/vicissitudes">
									<img
										className={`autocatalytica__bandcamp autocatalytica__link-icon `}
										src={BandcampIcon}
										alt="autocatalytica vicissitudes bandcamp link"
									/>
								</a>
								<a target="_blank" href="https://soundcloud.com/autocatalytica/sets/vicissitudes">
									<img
										className={`autocatalytica__link-icon autocatalytica__soundcloud`}
										src={SoundcloudIcon}
										alt="autocatalytica vicissitudes bandcamp link"
									/>
								</a>
								<a
									target="_blank"
									href="https://open.spotify.com/album/58o38VHBKSylRQVDZbliTO?si=LqbwxuYIRXmoiOIPqi4TQA"
								>
									<img
										className={`autocatalytica__link-icon autocatalytica__spotify`}
										src={SpotifyIcon}
										alt="autocatalytica vicissitudes bandcamp link"
									/>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className={`autocatalytica__album-container`}>
				<h2 className={`autocatalytica__album-header`}>Autocatalytica - LP - 2014</h2>
				<div className={`autocatalytica__album-art-description-container`}>
					<img
						className={`autocatalytica__album-artwork`}
						src={AutocatalyticaAlbumArt}
						alt="Eponymous Album Artwork"
					/>
					<ul className={`autocatalytica__album-description`}>
						<li>First LP with US-based lineup, and first Full-Length LP</li>
						<li>Vocals, Engineering, Mixing, and Guitar by Eric Thorfinnson</li>
						<li>"Makes The Dillinger Escape Plan sound like Nickelback"-Metal Hammer</li>
						<li className={`autocatalytica__links`}>
							<a target="_blank" href="https://autocatalytica.bandcamp.com/album/autocatalytica">
								<img
									className={`autocatalytica__link-icon autocatalytica__bandcamp`}
									alt="autocatalytica autocatalytica bandcamp link"
									src={BandcampIcon}
								/>
							</a>
							<a target="_blank" href="https://soundcloud.com/autocatalytica/sets/autocatalytica">
								<img
									className={`autocatalytica__link-icon autocatalytica__soundcloud`}
									alt="autocatalytica  soundcloud link"
									src={SoundcloudIcon}
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={`autocatalytica__album-container`}>
				<h2 className={`autocatalytica__album-header`}>Horror Vacui - EP - 2012</h2>
				<div className={`autocatalytica__album-art-description-container`}>
					<img
						className={`autocatalytica__album-artwork`}
						src={HorrorVacuiAlbumArt}
						alt="Eponymous Album Artwork"
					/>
					<ul className={`autocatalytica__album-description`}>
						<li>Debut Release with US-based lineup</li>
						<li>Vocals,Engineering and Guitar by Eric Thorfinnson</li>
						<li>Features a Prog-metal re-imagining of Claude Debussy's "Tarantelle Styrienne"</li>
						<li>Mixing by Matt Lands</li>
						<li className={`autocatalytica__links`}>
							<a target="_blank" href="https://autocatalytica.bandcamp.com/album/horror-vacui-ep">
								<img
									className={`autocatalytica__link-icon autocatalytica__bandcamp`}
									alt="autocatalytica autocatalytica bandcamp link"
									src={BandcampIcon}
								/>
							</a>
							<a target="_blank" href="https://soundcloud.com/autocatalytica/sets/horror-vacui">
								<img
									className={`autocatalytica__link-icon autocatalytica__soundcloud`}
									alt="autocatalytica autocatalytica soundcloud link"
									src={SoundcloudIcon}
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={`autocatalytica__video-container`}>
				<h2 className={`autocatalytica__section-header`}>Video</h2>
				<div className={`autocatalytica__video-two-container`}>
					<YouTube className={`autocatalytica__video`} videoId={'J4LmFtEwcQA'} opts={opts} />
					<YouTube className={`autocatalytica__video`} videoId={'116BMZV_v9U'} opts={opts} />
				</div>
				<div className={`autocatalytica__video-two-container`}>
					<YouTube className={`autocatalytica__video`} videoId={'nRZ5cRF-te8'} opts={opts} />
					<YouTube className={`autocatalytica__video`} videoId={'Osq5Af9IYhQ'} opts={opts} />
				</div>

				<div className={`autocatalytica__video-two-container`}>
					<YouTube className={`autocatalytica__video`} videoId={'sorcaXQynu8'} opts={opts} />
					<YouTube className={`autocatalytica__video`} videoId={'cbn97elSACQ'} opts={opts} />
				</div>
			</div>
		</div>
	);
}
