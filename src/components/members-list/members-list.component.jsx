import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Members = ({ member }) => {
	return useParams().name ? (
		'yes'
	) : (
		<Col
			xs={member.image !== '' ? 4 : 3}
			className="my-3"
			style={{ cursor: 'pointer' }}
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
