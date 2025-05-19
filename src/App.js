import Clock from './atoms/Clock';
import { Analytics } from "@vercel/analytics/react"

function App() {
	return (
		<> 
			<Clock />
			<Analytics />
		</>
	);
}

export default App;
