import { useEffect, useState } from 'react';
import {
	collection,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
} from 'firebase/firestore';
import { db } from '../../utils/firebase';

import ImageCard from '../ImageCard/ImageCard';

import './Archive.css';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

let lastLoaded = null;

export default function Archive() {
	const [error, setError] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	const [imageData, setImageData] = useState([]);

	async function getArchive() {
		const tempStore = [];
		const apodRef = collection(db, 'apodImageData');
		// need to figure out orderBy to get in date most-recent order
		const limitApod = query(apodRef, orderBy('title'), limit(25));
		const querySnapshot = await getDocs(limitApod);
		querySnapshot.forEach((doc) => {
			tempStore.push(doc.data());
		});
		if (tempStore.length > 0) {
			setImageData(tempStore);

			// lastLoaded = tempStore[tempStore.length -1]
			lastLoaded = querySnapshot.docs[querySnapshot.docs.length - 1];
		}
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

	// maybe change to scrolling pagination - if keep paginated need back button
	async function getArchiveNext() {
		const tempStore = [];

		const apodRef = collection(db, 'apodImageData');
		// need to figure out orderBy to get in date most-recent order
		const limitApod = query(
			apodRef,
			orderBy('title'),
			startAfter(lastLoaded || 0),
			limit(20)
		);

		const querySnapshot = await getDocs(limitApod);
		querySnapshot.forEach((doc) => {
			tempStore.push(doc.data());
		});
		if (tempStore.length > 0) {
			window.scrollTo(0, 0);
			setImageData(tempStore);

			lastLoaded = querySnapshot.docs[querySnapshot.docs.length - 1];
		}
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
		return <div className='loading'>Loading...</div>;
	} else {
		return (
			<div className='archive-container'>
				{/* <h1 className="archive-title">Archive</h1> */}

				<Masonry
					breakpointCols={masonryBreakpoints}
					className='archive-masonry-grid'
					columnClassName='archive-masonry-grid_column'
				>
					{imageData.map((doc, index) => (
						<div>
							<Link
								to={'/archive-detail/' + index}
								className='link'
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

				<button className='btnLoadNext' onClick={getArchiveNext}>
					Load More
				</button>
			</div>
		);
	}
}
