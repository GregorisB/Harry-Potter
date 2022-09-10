import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Card, Col } from "react-bootstrap";
import Song from "../../assets/audio/Harry_Potter_Theme_Song.mp3";

const useAudio = () => {
	const [audio] = useState(new Audio(Song));
	const [playing, setPlaying] = useState(false);

	const toggle = () => setPlaying(!playing);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing]);

	return [playing, toggle];
};

const Header = () => {
	const [playing, toggle] = useAudio(Song);

	return (
		<Container className="my-5 ">
			<Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
				<button
					style={{
						borderRadius: "50px",
						width: "50px",
						height: "50px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						border: "none",
						backgroundColor: "transparent",
						color: "white",
					}}
					onClick={toggle}
				>
					{playing ? <span>&#9634;</span> : <span>&#x25B7;</span>}
				</button>
			</Col>
			<Outlet />
		</Container>
	);
};

export default Header;
