import { useLocation, useParams } from "react-router";
import "./ArchiveDetail.css";

export default function ArchiveDetail() {
	const location = useLocation();
	const { from } = location.state;
	const params = useParams("archive-detail/:key")
	const {key} = params

	// TODO: needs a 'back to archive' navigation
	return (
		<div className="flex-container">
			<div className="detail-img-container">
			<p className="detail-img-title">{from[key].title}</p>
			<div className="detail-image-explanation-container">
				<img
					className="detail-main-img"
					src={from[key].url}
					alt={from[key].title}
				></img>
				<p className="detail-img-explanation">{from[key].explanation}</p>
			</div>
		</div>
		</div>
		
	);
}
