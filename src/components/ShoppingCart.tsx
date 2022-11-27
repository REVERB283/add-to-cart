import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import products from "../data/items.json";

type ShoppingCartProps = {
	isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
	const { closeCart, cartItems } = useShoppingCart();

	const proceedToCheckout = () => {
		console.log("---------Bill Generated---------");
		cartItems.forEach((cartItem) => {
			const item = products.find((i) => i.id === cartItem.id);
			console.log(`• ${item?.name}: ${formatCurrency(item?.price || 0)} x ${cartItem.quantity}`);
		});
		console.log(`Total: ${formatCurrency(findTotal)}`);
	};

	const findTotal = cartItems.reduce((total, cartItem) => {
		const item = products.find((i) => i.id === cartItem.id);
		return total + (item?.price || 0) * cartItem.quantity;
	}, 0);

	return (
		<Offcanvas show={isOpen} onHide={closeCart} placement="end">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
					<div className="ms-auto fw-bold fs-5">Total: {formatCurrency(findTotal)}</div>
					{cartItems.length > 1 && (
						<div className="ms-auto">
							<Button variant="success" onClick={proceedToCheckout}>
								CHECKOUT
							</Button>
						</div>
					)}
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
}
