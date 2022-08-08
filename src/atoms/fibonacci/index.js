import { Grid } from '@mui/material';

const Fibonacci = ({ semiX, semiY, number }) => {
	let semillaX = semiX;
	let semillaY = semiY;
	let result = [];

	const generateFibonaci = () => {
		result.push(semillaX);
		result.push(semillaY);
		for (let i = 0; i < number; i++) {
			const value = semillaX + semillaY;
			semillaX = semillaY;
			semillaY = value;
			result.push(value);
		}
	};
	generateFibonaci();

	return (
		<Grid container spacing={2} padding={'0 8rem '}>
			{result?.map((i) => {
				return (
					<Grid item xs={6} md={4} lg={2}>
						{i}
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Fibonacci;
