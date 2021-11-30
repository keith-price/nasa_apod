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
						<YouTubePlayer
							// setting 'light' to false hides the video and only shows a play button. Would need to have a thumbnail behing. If this isn't set to 'light' then clicking on the video doesn't trigger the onClick instead it just playes the video inside the archive.
							// light="false"
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
