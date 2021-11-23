import "./ArchiveDetail.css";
import DUMMY_DATA from "../../DUMMY_DATA";

export default function ArchiveDetail() {
	return (
		<div className="modal-img-container">
			<p className="modal-img-title">{DUMMY_DATA[0].title}</p>
			<div className="modal-image-explanation-container">
				<img
					className="modal-main-img"
					src={DUMMY_DATA[0].url}
					alt={DUMMY_DATA[0].title}
				></img>
				<p className="modal-img-explanation">{DUMMY_DATA[0].explanation}</p>
			</div>
		</div>
	);
}
