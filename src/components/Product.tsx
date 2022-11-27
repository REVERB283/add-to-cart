import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type ProductProps = {
	id: number;
	name: string;
	price: number;
	image: string;
};

export function Product({ id, name, price, image }: ProductProps) {
	const navigate = useNavigate();
	const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
	const quantity = getItemQuantity(id);

	return (
		<Card className="h-100" style={{ cursor: "pointer" }}>
			<Card.Img variant="top" src={image} height="300rem" style={{ objectFit: "cover" }} alt={name} onClick={() => navigate(`/${id}`)} />
			<Card.Body className="d-flex flex-column text-center">
				<Card.Title onClick={() => navigate(`/${id}`)}>{name}</Card.Title>
				<Card.Text onClick={() => navigate(`/${id}`)}>
					<span>{formatCurrency(price)}</span>
				</Card.Text>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button onClick={() => increaseCartQuantity(id)}>ADD TO CART</Button>
					) : (
						<div className="d-flex flex-column align-items-center" style={{ gap: ".5rem" }}>
							<div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
								<Button size="sm" onClick={() => decreaseCartQuantity(id)}>
									-
								</Button>
								<span className="">{quantity} in cart</span>
								<Button size="sm" onClick={() => increaseCartQuantity(id)}>
									+
								</Button>
							</div>
							<Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
								REMOVE
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
