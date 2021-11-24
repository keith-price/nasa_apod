import "./ImageCard.css";

export default function ImageCard(props) {
	// checks for video because sometimes the daily data inclused a YouTube video
	if (props.url.includes("youtube")) {
		return (
			<>
			<p className="card-img-title">{props.title}</p>
			<div className="card-container">
				
				<video className="card-img" src={props.url} alt={props.title}></video>
			</div>
			</>
		);
	} else {
		return (
			<>
			<p className="card-img-title">{props.title}</p>
			<div className="card-container">
				
				<img className="card-img" src={props.url} alt={props.title}></img>
			</div>
			</>
		);
	}
}
