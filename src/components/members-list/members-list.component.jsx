import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

const Members = ({ member }) => {
	return (
		<Col
			xs={member.image !== '' ? 4 : 3}
			className="my-3"
			style={{cursor: 'pointer'}}
		>
			<Link className="text-decoration-none" to={member.name}>
				<Card>
					<Card.Header>
						<Card.Title className="text-dark">{member.name}</Card.Title>
						<Card.Img src={member.image} />
					</Card.Header>
				</Card>
			</Link>

		</Col>
	);
};

export default Members;
