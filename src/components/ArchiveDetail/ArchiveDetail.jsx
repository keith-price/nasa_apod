import { useLocation, useParams } from "react-router";
import YouTubePlayer from "react-player/youtube";
import { Link } from "react-router-dom";

import "./ArchiveDetail.css";

export default function ArchiveDetail() {
	const location = useLocation();
	const { from } = location.state;
	const params = useParams("archive-detail/:key");
	const { key } = params;
	let modalData = from[key].url;
	console.log(modalData);

	return (
		// <div className="flex-container">
			<div className="detail-img-container">
				<p className="detail-img-title">{from[key].title}</p>
				{/* <div className="detail-image-explanation-container"> */}
					<Link
						to="/image-zoom"
						className="modal-link"
						state={{ from: modalData }}
					>
						{from[key].url.includes("youtube") ? (
							<YouTubePlayer
								className="detail-main-vid"
								url={from[key].url}
								alt={from[key].title}
								// shows native YouTube controls when set to 'true'. Allows the user to replay or go directly to YouTube
								controls="true"
							/>
						) : (
							<img
								className="detail-main-img"
								src={from[key].url}
								alt={from[key].title}
							></img>
						)}
					</Link>

					<div className="img-btn-container">
						<p className="detail-img-explanation">{from[key].explanation}</p>
						<Link to={"/archive"} className="link-archive">
							<button className="btn-back-archive">Back to archive</button>
						</Link>
					</div>
				</div>
			// </div>
		// </div>
	);
}
