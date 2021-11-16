import { useEffect, useState } from "react";

import "./ImageComponent.css";

function ImageComponent() {
	const [error, setError] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	const [imageData, setImageData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/daily-image")
			.then((response) => response.json())
			.then(
				(data) => {
					setIsLoaded(true);
					setImageData(data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);
	console.log(imageData);

	// return <h1>Why is there no data?</h1>

	if (error) {
		return <div>Error: {error}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
	}
	if (imageData[0].url.includes("youtube")) {
		return (
			<>
				<p className="img-title">${imageData[0].title}</p>
				<div className="image-description-container">
					<video className="main-img">
						<source src={imageData[0].url} alt={imageData[0].title}></source>
					</video>
					<p className="img-description">{imageData[0].description}</p>
				</div>
				`;
			</>
		);
	} else {
		return (
			<>
				<p className="img-title">{imageData[0].title}</p>
				<div className="image-description-container">
					<img
						className="main-img"
						src={imageData[0].url}
						alt={imageData[0].title}
					></img>
					<p className="img-description">{imageData[0].description}</p>
				</div>
			</>
		);
	}
}

export default ImageComponent;
