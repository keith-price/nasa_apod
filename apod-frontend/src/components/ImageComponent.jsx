import { useEffect, useState } from "react";

import "./ImageComponent.css";

function ImageComponent() {
	const [error, setError] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	const [imageData, setImageData] = useState([]);

	async function getImageData() {
		const response = await fetch("http://localhost:8000/daily-image");
		setImageData(await response.json());
	}

	useEffect(() => {
		getImageData().then(
			() => {
				setIsLoaded(true);
			},
			(error) => {
				setIsLoaded(false);
				setError(error);
			}
		);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		if (imageData[0].url.includes("youtube")) {
			return (
				<div className="img-container">
					<p className="img-title">${imageData[0].title}</p>
					<div className="image-description-container">
						<video className="main-img">
							<source src={imageData[0].url} alt={imageData[0].title}></source>
						</video>
						<p className="img-description">{imageData[0].description}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className="img-container">
					<p className="img-title">{imageData[0].title}</p>
					<div className="image-description-container">
						<img
							className="main-img"
							src={imageData[0].url}
							alt={imageData[0].title}
						></img>
						<p className="img-description">{imageData[0].description}</p>
					</div>
				</div>
			);
		}
	}
}

export default ImageComponent;
