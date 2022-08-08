import Box from '@mui/material/Box';

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
		<>
			{result?.map((i) => {
				return <Box>{i}</Box>;
			})}
		</>
	);
};

export default Fibonacci;
