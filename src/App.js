import { Routes, Route } from "react-router-dom";
import ArchivePage from "./pages/ArchivePage.jsx";
import DailyImagePage from "./pages/DailyImagePage.jsx";
import ArchiveDetailPage from "./pages/ArchiveDetailPage.jsx";


import "./App.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<DailyImagePage />} />
				<Route path="/archive" element={<ArchivePage />} />
				{/* only for testing - ArchiveModal will open via Archive page */}
				<Route path="/archive-detail" element={<ArchiveDetailPage />} />
			</Routes>
		</>
	);
}
