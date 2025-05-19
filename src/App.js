import Clock from './atoms/Clock';
import { Analytics } from "@vercel/analytics/react"
import "./App.css"
function App() {
	return (
			<div className='Container'>
				<h1> SECUENCIA DE FIBONACCI</h1>
				<div className='Container2'> 
					<p>¿Qué es la secuencia de Fibonacci?
						La secuencia de Fibonacci es una sucesión numérica en la que cada número es la suma de los dos anteriores. Comienza con 0 y 1, y sigue así: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc. Es una de las secuencias más famosas de las matemáticas por sus propiedades y apariciones en la naturaleza.</p>
					<Clock />
					<p>Para calcular un número en la secuencia de Fibonacci, se usa la siguiente fórmula:

								F(n) = F(n-1) + F(n-2)

								Donde:

								F(n) es el número en la posición n

								F(0) = 0 y F(1) = 1 (valores iniciales)

								También existen fórmulas más avanzadas como la fórmula de Binet, que permite obtener el término exacto sin calcular todos los anteriores.</p>
					<Analytics />
				</div>
			</div>

	);
}

export default App;
