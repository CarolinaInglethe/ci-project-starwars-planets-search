import React, { useState, useCallback, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  // ESTADOS -------------------------------
  const [data, setData] = useState();

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const [filtered, setFiltered] = useState();

  const [columnsOptions, setColumnsOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  // FETCH PARA API ---------------------------------------
  const fetchApiPlanets = useCallback(async () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => {
        // remove residents pra ter apenas 13 colunas:
        response.results.forEach((obj) => delete obj.residents);
        setData(response.results);
      });
  }, []);

  // ----------------------------------------------------------

  // FUNÇAO FILTRA NOME:
  const filterByNamePlanet = (valueName) => {
    setFilters({
      ...filters,
      filterByName: {
        name: valueName,
      },
    });
  };

  // GUARDA ARRAY PARA RENDERIZAR DADOS DE PLANETAS ATRAVES DA FILTRAGEM: --------------------------------------------
  useEffect(() => {
    if (filters.filterByNumericValues.length > 0) {
      const { column, value, comparison } = filters.filterByNumericValues[0];
      switch (comparison) {
      case 'maior que': {
        const resp = data.filter((fil) => Number(fil[column]) > Number(value));
        setData(resp);
        break;
      }
      case 'menor que': {
        const resp = data.filter((fil) => Number(fil[column]) < Number(value));
        setData(resp);
        break;
      }
      case 'igual a': {
        const resp = data.filter((fil) => Number(fil[column]) === Number(value));
        setData(resp);
        break;
      }
      default: console.log('');
      }
    }
  }, [data, filters.filterByNumericValues]);

  // -------------------------------------------------------
  // REMOVE COLUNAS OPTIONS DO SELECT JA USADOS
  useEffect(() => {
    const options = columnsOptions;
    filters.filterByNumericValues.forEach(({ column }) => {
      // indefof retorna indice daquela palavra, e p spclice remove onde esta esse indice e quantas vezes
      options.splice(options.indexOf(column), 1);
      setColumnsOptions(options);
    });
  }, [columnsOptions, filters.filterByNumericValues]);

  //---------------------------------------------------------

  return (
    <MyContext.Provider
      value={ {
        data,
        filters,
        filtered,
        columnsOptions,
        setFilters,
        setFiltered,
        fetchApiPlanets,
        filterByNamePlanet,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.objectOf(propTypes.any).isRequired,
};

export default MyProvider;
