import "./ImageCard.css";

export default function ImageCard(props) {
	// need to check for video as sometimes the daily data inclused a YouTube video
	if (props.url.includes("youtube")) {
		return (
			<div className="card-container">
				<p className="card-img-title">{props.title}</p>
				<video className="card-img" src={props.url} alt={props.title}></video>
			</div>
		);
	} else {
		return (
			<div className="card-container">
				<p className="card-img-title">{props.title}</p>
				<img className="card-img" src={props.url} alt={props.title}></img>
			</div>
		);
	}
}
