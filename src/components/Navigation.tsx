import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navigation() {
	return (
		<Navbar className="bg-white shadow-sm mb-3">
			<Container>
				<Nav className="me-auto">
					<Nav.Link to={"/"} as={NavLink}>
						Home
					</Nav.Link>
					<Nav.Link to={"/checkout"} as={NavLink}>
						Checkout
					</Nav.Link>
				</Nav>
				Cart Icon
			</Container>
		</Navbar>
	);
}
