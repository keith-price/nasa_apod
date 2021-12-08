import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<div className="header-container">
				<p>Astronomy Picture of the Day</p>
				<ul>
					<li>
						<Link to="/">APOD</Link>
						<Link to="/archive">Archive</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
