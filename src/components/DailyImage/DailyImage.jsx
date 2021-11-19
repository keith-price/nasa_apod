import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { doc, setDoc } from "@firebase/firestore";

import "./DailyImage.css";

export default function ImageComponent() {
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
				setIsLoaded(true);
				setError(error);
			}
		);
		try {
			setDoc(doc(db, "apodImageData", imageData.date), {
				url: imageData.url,
				title: imageData.title,
				explanation: imageData.explanation,
			});
		} catch (e) {
			console.error("Error adding document:  ", e);
		}
		// document is currently written to Cloud Firestore on every render. Needs to have a setTimeout or some kind of functionality that limits it to one write daily
	}, [imageData.date, imageData.explanation, imageData.title, imageData.url]);

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
