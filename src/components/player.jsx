// import React, { useState, useEffect } from "react";
// import M from "../assets/audio/Harry_Potter_Theme_Song.mp3";

// const useAudio = () => {
// 	const [audio] = useState(new Audio(M));
// 	const [playing, setPlaying] = useState(true);

// 	const toggle = () => setPlaying(!playing);

// 	useEffect(() => {
// 		playing ? audio.play() : audio.pause();
// 	}, [playing]);

// 	return [playing, toggle];
// };

// const Player = () => {
// 	const [playing, toggle] = useAudio(M);

// 	return (
// 		<div>
// 			<button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
// 		</div>
// 	);
// };

// export default Player;
