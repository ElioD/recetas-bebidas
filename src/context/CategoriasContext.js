import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//CREAR EL CONTEXT
export const CategoriasContaxt = createContext();

//Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {
	//Crear el state del Context
	const [ categorias, guardarCategorias ] = useState([]);

	//Ejecutar el llamado ala API
	useEffect(() => {
		const obtenerCategorias = async () => {
			const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

			const categorias = await axios.get(url);
			guardarCategorias(categorias.data.drinks);
		};

		obtenerCategorias();
	}, []);

	return <CategoriasContaxt.Provider value={{ categorias }}>{props.children}</CategoriasContaxt.Provider>;
};

export default CategoriasProvider;
