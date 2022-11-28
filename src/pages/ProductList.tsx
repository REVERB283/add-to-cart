import { Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";
import products from "../data/items.json";

export function ProductList() {
	return (
		<>
			<Row className="g-3 mb-5" lg={4} md={2} xs={1}>
				{products.map((product) => (
					<Col key={product.id}>
						<Product {...product} />
					</Col>
				))}
			</Row>
		</>
	);
}
