import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

export default function ProductDescription() {
	const { id } = useParams();
	const item = products.find((i) => i.id === Number(id));
	const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
	const quantity = getItemQuantity(Number(id));

	return (
		<Row className="g-5 my-3" lg={2} md={1}>
			<Col>
				<img className="rounded-1 w-100" src={item?.image} alt={item?.name} style={{ height: "45rem", objectFit: "cover" }} />
			</Col>
			<Col>
				<div className="fw-bold fs-1">{item?.name}</div>
				<div className="fw-bold fs-3 text-muted">{formatCurrency(item?.price || 0)}</div>
				<hr />
				<div className="fw-bold fs-2">Description</div>
				<div className="fs-5">{item?.description}</div>
				<hr />
				<div className="d-flex justify-content-center">
					{quantity === 0 ? (
						<Button onClick={() => increaseCartQuantity(Number(id))}>ADD TO CART</Button>
					) : (
						<div className="d-flex flex-column align-items-center" style={{ gap: ".5rem" }}>
							<div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
								<Button size="sm" onClick={() => decreaseCartQuantity(Number(id))}>
									-
								</Button>
								<span className="">{quantity} in cart</span>
								<Button size="sm" onClick={() => increaseCartQuantity(Number(id))}>
									+
								</Button>
							</div>
							<Button variant="danger" size="sm" onClick={() => removeFromCart(Number(id))}>
								REMOVE
							</Button>
						</div>
					)}
				</div>
			</Col>
		</Row>
	);
}
