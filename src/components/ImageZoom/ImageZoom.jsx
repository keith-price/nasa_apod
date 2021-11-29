import { useLocation } from "react-router";
import "./ImageZoom.css";

export default function ImageZoom() {
    const location = useLocation();
	const { from } = location.state;
	return (
		<div className="container-test">
			{/* hard coded just to test, will bring in from state */}
			<img className="img-modal"
				src={from}
				alt="test"
			/>
		</div>
	);
}
