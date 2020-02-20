import React, { useContext, useState } from 'react';

//CONTEXTS APIS
import { CategoriasContaxt } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
	const [ busqueda, guardarBusqueda ] = useState({
		nombre: '',
		categoria: ''
	});

	//Obtener datos receta
	const obtenerDatoReceta = (e) => {
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value
		});
	};

	//CONTEXTS
	const { categorias } = useContext(CategoriasContaxt);
	const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

	return (
		<form
			className="col-12"
			onSubmit={(e) => {
				e.preventDefault();
				buscarRecetas(busqueda);
				guardarConsultar(true);
			}}
		>
			<fieldset className="text-center">
				<legend>Busca bebidas por Categoría o Integrediente </legend>
			</fieldset>

			<div className="row mt-4">
				<div className="col-md-4">
					<input
						name="nombre"
						className="form-control"
						type="text"
						placeholder="Bucar por Ingrediente "
						onChange={obtenerDatoReceta}
					/>
				</div>
				<div className="col-md-4">
					<select className="form-control" name="categoria" onChange={obtenerDatoReceta}>
						<option value="">-- Selecciona Categoría --</option>
						{categorias.map((el) => (
							<option key={el.strCategory} value={el.strCategory}>
								{el.strCategory}
							</option>
						))}
					</select>
				</div>
				<div className="col-md-4">
					<input type="submit" className="btn btn-block btn-primary" value="Buscar Bebidas" />
				</div>
			</div>
		</form>
	);
};

export default Formulario;
