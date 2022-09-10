import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const HouseCard = ({ name, img }) => {
	return (
		<Col xs={6} className="my-5" style={{ cursor: "pointer" }}>
			<Link className="text-decoration-none" to={name}>
				<Card
					style={{
						backgroundColor: "transparent",
						borderColor: "transparent",
					}}
				>
					<Card.Body>
						<Card.Img src={img} alt="house-bg" height="650px" />
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
};

export default HouseCard;
