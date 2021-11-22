import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import ImageCard from "../ImageCard/ImageCard";

import "./Archive.css";

export default function Archive() {
	const [error, setError] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	const [imageData, setImageData] = useState([]);

	async function getArchive() {
		const tempStore = [];
		const querySnapshot = await getDocs(collection(db, "apodImageData"));
		querySnapshot.forEach((doc) => {
			tempStore.push(doc.data());
		});
		setImageData(tempStore);
	}

	useEffect(() => {
		getArchive().then(
			() => {
				setIsLoaded(true);
			},
			(error) => {
				setIsLoaded(true);
				setError(error);
			}
		);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<div className="wrap">
					<h1 className="archive-title">APOD Archive</h1>
					<div className="main-container-archive">
						{imageData.map((doc) => (
							<ImageCard title={doc.title} url={doc.url} key={doc.date} />
						))}
					</div>
				</div>
			</>
		);
	}
}
// need to render an ImageCard (import from ImageCard and use props for data) for each doc in imageData

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
