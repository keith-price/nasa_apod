import YouTubePlayer from 'react-player/youtube';
import './ImageCard.css';

export default function ImageCard(props) {
	// checks for video because sometimes the daily data inclused a YouTube video

	return (
		<>
			{props.url.includes('youtube') ? (
				<>
					<div className='card-container'>
						<YouTubePlayer
							// light="true"

							className='vid-img'
							url={props.url}
							alt={props.title}
						/>
					</div>
				</>
			) : (
				<>
					<div className='card-container'>
						<img className='card-img' src={props.url} alt={props.title}></img>
					</div>
				</>
			)}
		</>
	);
}
