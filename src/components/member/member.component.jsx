import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Member = () => {
	const { name } = useParams()
	console.log(name)
	return (
		<div>Memen</div>
	);
};

export default Member;
