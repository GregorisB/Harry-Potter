import { Container, Row } from "react-bootstrap";
import HouseCard from "../house-card/house-card.component";

const Houses = () => {
   return (
      <Container>
         <Row className="w-100 m-auto">
            <HouseCard
               name="house1"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="house2"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="house3"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="house4"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="house5"
               img="https://dummyimage.com/600x400/000/fff"
            />
            <HouseCard
               name="house6"
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
