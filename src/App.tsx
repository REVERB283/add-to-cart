import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Navigation } from "./components/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Container className="mb-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<Product />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</Container>
		</>
	);
}

export default App;
