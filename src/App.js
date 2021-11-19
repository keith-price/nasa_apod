import { Routes, Route } from "react-router-dom";
import ArchivePage from "./pages/ArchivePage.jsx";
import DailyImagePage from "./pages/DailyImagePage.jsx";

import "./App.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<DailyImagePage />} />
				<Route path="/archive" element={<ArchivePage />} />
			</Routes>
		</>
	);
}
