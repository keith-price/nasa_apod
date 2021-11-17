import { useEffect, useState } from "react";
import { database, ref, set } from "../utils/firebase";

import "./ImageComponent.css";

function ImageComponent() {
	const [error, setError] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	const [imageData, setImageData] = useState([]);

	async function getImageData() {
		const response = await fetch(
			"https://api.nasa.gov/planetary/apod?api_key=j4gWd4PrmFjZ0QzJw7hb33y9VOTbGPIxt7ecSxff"
		);
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

	// writes data to Firebase - maybe need to move this into a separate file/component
	async function writeImageData() {
		const db = database;
		await set(ref(db, "imagesData/" + imageData.date), {
			url: imageData.url,
			title: imageData.title,
			explanation: imageData.explanation,
		});
	}
	writeImageData();


	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		if (imageData.url.includes("youtube")) {
			return (
				<div className="img-container">
					<p className="img-title">${imageData.title}</p>
					<div className="image-explanation-container">
						<video className="main-img">
							<source src={imageData.url} alt={imageData.title}></source>
						</video>
						<p className="img-explanation">{imageData.explanation}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className="img-container">
					<p className="img-title">{imageData.title}</p>
					<div className="image-explanation-container">
						<img
							className="main-img"
							src={imageData.url}
							alt={imageData.title}
						></img>
						<p className="img-explanation">{imageData.explanation}</p>
					</div>
				</div>
			);
		}
	}
}

export default ImageComponent;