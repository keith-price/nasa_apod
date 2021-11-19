import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<p>Astronomy Picture of the Day</p>
			<ul>
				<li>
					{/* APOD is the homepage but Home doesn't really explian what the page displays */}
					<Link to="/">APOD</Link>
					<Link to="/archive">APOD-Archive</Link>
				</li>
			</ul>
		</header>
	);
}
