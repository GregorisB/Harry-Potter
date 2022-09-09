import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Members from '../members-list/members-list.component';
import Member from '../member/member.component';

const House = () => {
	const [house, setHouse] = useState([]);
	const { houseName } = useParams();
	const { name } = useParams();

	useEffect(() => {
		fetch(`http://hp-api.herokuapp.com/api/characters/house/${houseName}`)
			.then((response) => response.json())
			.then((data) => setHouse(data));
	});

	return (
		<Container>
			<Row className="w-75 m-auto">
				{/* {useParams().name
					? <Member />
					: house.map((member, index) => {
						return <Members member={member} key={index} />;
					})
				} */}
				{house.map((member, index) => {
					return name ?
						<Member />
					:
						<Members member={member} key={index} />
					;
				})}
			</Row>
		</Container>
	);
};

export default House;
