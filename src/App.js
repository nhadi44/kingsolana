import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ErrorPage } from './pages/404';

import { Home } from './pages/Home';
import { Presale } from './pages/Presale';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/presale" element={<Presale />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
