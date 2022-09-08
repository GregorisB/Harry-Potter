import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Members from '../members-list/members-list.component';

const House = () => {
	const [house, setHouse] = useState([]);
	const { houseName } = useParams();

	useEffect(() => {
		fetch(`http://hp-api.herokuapp.com/api/characters/house/${houseName}`)
			.then((response) => response.json())
			.then((data) => setHouse(data));
	});

	return (
		<Container>
			{<Outlet />
				? <Outlet />
				:
			<Row className="w-75 m-auto">
				{house.map((member, index) => {
					return <Members member={member} key={index} />;
				})}
			</Row>}
			
		</Container>
	);
};

export default House;
