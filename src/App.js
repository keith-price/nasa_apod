import { Routes, Route } from "react-router-dom";
import ArchivePage from "./pages/ArchivePage.jsx";
import DailyImagePage from "./pages/DailyImagePage.jsx";
import ArchiveDetailPage from "./pages/ArchiveDetailPage.jsx";
import ImageZoomPage from "./pages/ImageZoomPage.jsx";

import "./App.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<DailyImagePage />} />
				<Route path="/archive" element={<ArchivePage />} />
				<Route path="/archive-detail/:key" element={<ArchiveDetailPage />} />
				<Route path="/image-zoom" element={<ImageZoomPage />} />
			</Routes>
		</>
	);
}
