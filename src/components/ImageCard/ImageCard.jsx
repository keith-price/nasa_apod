import "./ImageCard.css";
import { mockImageDate } from "../../data";

export default function ImageCard(props) {
	return (
		<div className="card-img-container">
			<p className="card-img-title">{mockImageDate[0].title}</p>
			<img
				className="card-img"
				src={mockImageDate[0].url}
				alt={mockImageDate[0].title}
			></img>
		</div>
	);
}
