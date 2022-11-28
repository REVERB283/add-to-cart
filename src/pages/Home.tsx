import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { ProductList } from "./ProductList";

export function Home() {
	return (
		<div>
			<div className="d-flex justify-content-center g-3" style={{ height: "20vh", background: "#f1ede4", width: "100vw" }}>
				<Container>
					<Card style={{ marginTop: "5rem", marginBottom: "5rem" }}>
						<Card.Body>
							<Row className="g-3 py-4 px-3" sm={1} lg={3}>
								<Col>
									<Stack direction="horizontal">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-1-circle-fill p-3"
												viewBox="0 0 16 16"
												style={{ width: "130px", height: "130px" }}
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" />
											</svg>
										</div>
										<div className="text-break">
											<div className="fs-3 fw-bold">Products</div>
											<div className="fs-6 text-muted">Elementum integer enim neque volutpat ac tincidunt vitae.</div>
										</div>
									</Stack>
								</Col>
								<Col>
									<Stack direction="horizontal">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-2-circle-fill p-3"
												viewBox="0 0 16 16"
												style={{ width: "130px", height: "130px" }}
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
											</svg>
										</div>
										<div className="text-break">
											<div className="fs-3 fw-bold">Cake Class</div>
											<div className="fs-6 text-muted">Cursus risus at ultrices mi tempus imperdiet nulla.</div>
										</div>
									</Stack>
								</Col>
								<Col>
									<Stack direction="horizontal">
										<div className="">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-3-circle-fill p-3"
												viewBox="0 0 16 16"
												style={{ width: "130px", height: "130px" }}
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
											</svg>
										</div>
										<div className="text-break">
											<div className="fs-3 fw-bold">Recipes</div>
											<div className="fs-6 text-muted">Viverra aliquet eget sit amet tellus cras.</div>
										</div>
									</Stack>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					<ProductList />
				</Container>
			</div>
		</div>
	);
}
