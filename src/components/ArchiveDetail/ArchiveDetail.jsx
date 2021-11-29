import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

import "./ArchiveDetail.css";

export default function ArchiveDetail() {
	const location = useLocation();
	const { from } = location.state;
	const params = useParams("archive-detail/:key");
	const { key } = params;
	let modalData = from[key].url;
	console.log(modalData);
	// TODO: need to add 'click to enlarge' for image, so that user can view larger image

	return (
		<div className="flex-container">
			<div className="detail-img-container">
				<p className="detail-img-title">{from[key].title}</p>
				<div className="detail-image-explanation-container">
					<Link
						to="/image-zoom"
						className="modal-link"
						state={{ from: modalData }}
					>
						<img
							className="detail-main-img"
							src={from[key].url}
							alt={from[key].title}
						></img>
					</Link>

					<div className="img-btn-container">
						<p className="detail-img-explanation">{from[key].explanation}</p>
						<Link to={"/archive"} className="link-archive">
							<button className="btn-back-archive">Back to archive</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
