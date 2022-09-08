import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const HouseCard = ({ name, img }) => {
   return (
      <Col xs={6} className="my-3" style={{ cursor: "pointer" }}>
         <Link className="text-decoration-none" to={name}>
            <Card>
               <Card.Header>
                  <Card.Title className="text-dark">{name}</Card.Title>
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
