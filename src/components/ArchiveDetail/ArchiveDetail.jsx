import { useLocation, useParams } from "react-router";
import "./ArchiveDetail.css";

export default function ArchiveDetail() {
	const location = useLocation();
	const { from } = location.state;
	const params = useParams("archive-detail/:key")
	const {key} = params

	console.log(from)
	return (
		<div className="flex-container">
			<div className="modal-img-container">
			<p className="modal-img-title">{from[key].title}</p>
			<div className="modal-image-explanation-container">
				<img
					className="modal-main-img"
					src={from[key].url}
					alt={from[key].title}
				></img>
				<p className="modal-img-explanation">{from[key].explanation}</p>
			</div>
		</div>
		</div>
		
	);
}
