import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<p>Astronomy Picture of the Day</p>
			<ul>
				<li>
					<Link to="/">APOD</Link>
					<Link to="/archive">APOD Archive</Link>
				</li>
			</ul>
		</header>
	);
}
