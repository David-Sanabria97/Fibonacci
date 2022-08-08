import { useState } from 'react';
import { Stack, Button } from '@mui/material';
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
		<Stack
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '2rem',
				margin: '3rem',
			}}
		>
			<Stack fontSize={{ xs: '2rem', md: '4rem', lg: '6rem' }}>
				{hour < 10 ? '0' + hour : hour}: {min < 10 ? '0' + min : min}:
				{sec < 10 ? '0' + sec : sec}
			</Stack>

			<Button onClick={getTime}> Generar Fibonacci</Button>
			<Fibonacci semiX={semiX} semiY={semiY} number={number} />
		</Stack>
	);
};
export default Clock;
