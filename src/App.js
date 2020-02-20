import React from 'react';
import Heaeder from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

//Los Context
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
	return (
		<CategoriasProvider>
			<RecetasProvider>
				<ModalProvider>
					<Heaeder />

					<div className="container mt-5">
						<div className="row">
							<Formulario />
						</div>
						<ListaRecetas />
					</div>
				</ModalProvider>
			</RecetasProvider>
		</CategoriasProvider>
	);
}

export default App;
