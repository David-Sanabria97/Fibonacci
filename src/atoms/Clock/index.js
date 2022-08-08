import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Fibonacci from '../fibonacci';

let hour = '00';
let min = '00';
let sec = '00';

let semiX = 0;
let semiY = 0;
let number = 0;

const Clock = () => {
	const [date, setDate] = useState(new Date());

	const getTime = () => {
		semiX = parseInt(min.toString()[0], 10);
		semiY = parseInt(min.toString()[1], 10);
		number = parseInt(sec, 10);
	};

	const uploadTime = () => {
		setDate(new Date());
		hour = date?.getHours();
		min = date?.getMinutes();
		sec = date?.getSeconds();
	};

	setTimeout(uploadTime, 1000);

	return (
		<Box>
			{hour < 10 ? '0' + hour : hour}: {min < 10 ? '0' + min : min}:{' '}
			{sec < 10 ? '0' + sec : sec}
			<Button onClick={getTime}> Generar Fibonacci</Button>
			<Fibonacci semiX={semiX} semiY={semiY} number={number} />
		</Box>
	);
};
export default Clock;
