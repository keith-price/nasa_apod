import './Header.css'

function Header() {
	return (
		<header>
			<p>Astronomy Picture of the Day</p>
			<ul>
				<li>
				{/* add routing = link to archive page */}
					<a href="#">Archive</a>
				</li>
			</ul>
		</header>
	);
}

export default Header;
