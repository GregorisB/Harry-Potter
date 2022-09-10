import { useEffect, useState } from "react";
import { Container, Card, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Member = () => {
	const { name } = useParams();
	const [fullname, setFullname] = useState([]);
	const [gender, setGender] = useState([]);
	const [ancestry, setAncestry] = useState([]);
	const [image, setImage] = useState([]);
	const [wand, setWand] = useState([]);
	const [hairColour, setHairColor] = useState([]);
	const [eyeColour, setEyeColor] = useState([]);

	useEffect(() => {
		fetch(`http://hp-api.herokuapp.com/api/characters`)
			.then((response) => response.json())
			.then((data) => {
				data.map((s) => {
					switch (s.name) {
						case name:
							setFullname(s.name.toUpperCase());
							setGender(s.gender.toUpperCase());
							setAncestry(s.ancestry.toUpperCase());
							setImage(s.image);
							setWand(s.wand.core.toUpperCase());
							setHairColor(s.hairColour.toUpperCase());
							setEyeColor(s.eyeColour.toUpperCase());
							break;
						default:
							break;
					}
				});
			});
	}, []);
	return (
		<Container className="w-75">
			<Col
				xs={image !== "" ? 4 : 3}
				className="w-25 m-auto"
				style={{ cursor: "pointer" }}
			>
				<Card>
					<Card.Header>
						<Card.Img src={image} />
					</Card.Header>
					<Card.Body>
						<Card.Title>
							{fullname ? `Name: ${fullname}` : void 0}
						</Card.Title>
						<Card.Title>
							{gender ? `Gender: ${gender}` : void 0}
						</Card.Title>
						<Card.Title>
							{ancestry ? `Ancestry: ${ancestry}` : void 0}
						</Card.Title>
						<Card.Title>
							{wand ? `Wand: ${wand}` : void 0}
						</Card.Title>
						<Card.Title>
							{hairColour
								? `Colour of Hairs: ${hairColour}`
								: void 0}
						</Card.Title>
						<Card.Title>
							{eyeColour
								? `Colour of Eyes: ${eyeColour}`
								: void 0}
						</Card.Title>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Member;
