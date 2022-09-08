import { Container, Row } from "react-bootstrap";
import HouseCard from "../house-card/house-card.component";

const Houses = () => {
   return (
      <Container>
         <Row className="w-75 m-auto">
            <HouseCard
               name="Gryffindor" 
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="Slytherin"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="Ravenclaw"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="Hufflepuff"
               img="https://dummyimage.com/600x400/000/fff"
            />
         </Row>
      </Container>
   );
};

export default Houses;
