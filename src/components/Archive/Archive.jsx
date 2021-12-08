import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

import ImageCard from "../ImageCard/ImageCard";

import "./Archive.css";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";

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

	// adjust cols for Masonry layout
	const masonryBreakpoints = {
		default: 4,
		1100: 4,
		700: 3,
		500: 2,
	};

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div className="loading">Loading...</div>;
	} else {
		return (
			// TODO: Archive page needs 'paging'. Maximum number of images per page and ability to page through to the next collection
			<>
				<h1 className="archive-title">Archive</h1>
				<Masonry
					breakpointCols={masonryBreakpoints}
					className="archive-masonry-grid"
					columnClassName="archive-masonry-grid_column"
				>
					{imageData.map((doc, index) => (
						<div>
							<Link
								to={"/archive-detail/" + index}
								className="link"
								state={{ from: imageData }}
							>
								<ImageCard
									title={doc.title}
									url={doc.url}
									explanation={doc.explanation}
									key={index}
								/>
							</Link>
						</div>
					))}
				</Masonry>
			</>
		);
	}
}
