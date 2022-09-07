import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const HouseCard = ({ name, img }) => {
   return (
      <Col xs={4} className="my-3" style={{ cursor: "pointer" }}>
         <Link to={name}>
            <Card>
               <Card.Header>
                  <Card.Title>{name}</Card.Title>
               </Card.Header>
               <Card.Body>
                  <Card.Img src={img} />
               </Card.Body>
            </Card>
         </Link>
      </Col>
   );
};

export default HouseCard;
