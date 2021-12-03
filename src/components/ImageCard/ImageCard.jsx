import YouTubePlayer from "react-player/youtube";
import "./ImageCard.css";

export default function ImageCard(props) {
	// checks for video because sometimes the daily data inclused a YouTube video

	return (
		<>
			{props.url.includes("youtube") ? (
				<>
					<p className="card-img-title">{props.title}</p>
					<div className="card-container">
						{/* setting light='true' disables the video playing on click and allows the apps onClick() to redirect to next page. Doesn't display thumbnail though and just leaves an empty window with a play button*/}
						<YouTubePlayer
							light="true"
							className="vid-img"
							url={props.url}
							alt={props.title}
						/>
					</div>
				</>
			) : (
				<>
					<p className="card-img-title">{props.title}</p>
					<div className="card-container">
						<img className="card-img" src={props.url} alt={props.title}></img>
					</div>
				</>
			)}
		</>
	);
}
