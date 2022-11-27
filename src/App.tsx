import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Home } from "./pages/Home";
import ProductDescription from "./pages/ProductDescription";

function App() {
	return (
		<ShoppingCartProvider>
			<Navigation />
			<Container className="mb-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<ProductDescription />} />
				</Routes>
			</Container>
		</ShoppingCartProvider>
	);
}

export default App;
