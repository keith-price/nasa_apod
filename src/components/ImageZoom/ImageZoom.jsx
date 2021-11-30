import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import YouTubePlayer from "react-player/youtube";

import "./ImageZoom.css";

export default function ImageZoom() {
	const navigate = useNavigate();
	const location = useLocation();
	const { from } = location.state;
	return (
		<div className="outer">
			<div className="container-image">
				{from.includes("youtube") ? (
					<YouTubePlayer className="vid-zoom" url={from} alt="test" />
				) : (
					<img className="img-zoom" src={from} alt="test" />
				)}
			</div>

			<button onClick={() => navigate(-1)} className="btn-back">
				Back
			</button>
		</div>
	);
}
