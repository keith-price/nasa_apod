import "./ImageCard.css";

export default function ImageCard(props) {
	return (
		<div className="card-container">
			<p className="card-img-title">{props.title}</p>
			<img className="card-img" src={props.url} alt={props.title}></img>
		</div>
	);
}
