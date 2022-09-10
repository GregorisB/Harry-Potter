import { Container, Row } from "react-bootstrap";
import HouseCard from "../house-card/house-card.component";
import GryffindorImage from "../../assets/images/gryffindor-card.jpg";
import SlytherinImage from "../../assets/images/slytherin-card.jpg";
import RavenclawImage from "../../assets/images/ravenclaw-card.jpg";
import HufflepuffImage from "../../assets/images/hufflepuff-card.jpg";

const Houses = () => {
	return (
		<Container>
			<Row className="w-75 m-auto">
				<HouseCard name="Gryffindor" img={GryffindorImage} />
				<HouseCard name="Slytherin" img={SlytherinImage} />
				<HouseCard name="Ravenclaw" img={RavenclawImage} />
				<HouseCard name="Hufflepuff" img={HufflepuffImage} />
			</Row>
		</Container>
	);
};

export default Houses;
