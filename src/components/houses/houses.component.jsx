import { Container, Row } from "react-bootstrap";
import HouseCard from "../house-card/house-card.component";

const Houses = () => {
   return (
      <Container>
         <Row className="w-100 m-auto">
            <HouseCard
               name="Targaryen" 
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="Stark"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="Baratheon"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="Lannister"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="Greyjoy"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="Tyrell"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="house7"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="house8"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="house9"
               img="https://dummyimage.com/600x400/000/fff"
            />
         </Row>
      </Container>
   );
};

export default Houses;
