import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

import "./Archive.css";

export default function ArchiveComponent() {
	const [error, setError] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	const [imageData, setImageData] = useState([]);

	async function getImageData() {
		// tempStore stores doc.data before it's used by setImageData
		const tempStore = [];
		const querySnapshot = await getDocs(collection(db, "apodImageData"));
		querySnapshot.forEach((doc) => {
			tempStore.push(doc.data());
		});
		setImageData(tempStore);
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
	}, []);

	return <h1>Testing</h1>;

	// if (error) {
	// 	return <div>Error: {error.message}</div>;
	// } else if (!isLoaded) {
	// 	return <div>Loading...</div>;
	// } else {
	// 	if (imageData.url.includes("youtube")) {
	// 		return (
	// 			<div className="img-container">
	// 				<p className="img-title">${imageData.title}</p>
	// 				<div className="image-explanation-container">
	// 					<video className="main-img">
	// 						<source src={imageData.url} alt={imageData.title}></source>
	// 					</video>
	// 					<p className="img-explanation">{imageData.explanation}</p>
	// 				</div>
	// 			</div>
	// 		);
	// 	} else {
	// 		return (
	// 			<div className="img-container">
	// 				<p className="img-title">{imageData.title}</p>
	// 				<div className="image-explanation-container">
	// 					<img
	// 						className="main-img"
	// 						src={imageData.url}
	// 						alt={imageData.title}
	// 					></img>
	// 					<p className="img-explanation">{imageData.explanation}</p>
	// 				</div>
	// 			</div>
	// 		);
	// 	}
	// }
}
