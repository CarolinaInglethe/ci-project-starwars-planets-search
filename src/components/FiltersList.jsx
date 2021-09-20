import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FiltersList() {
  const { filters, setFilters, setFiltered } = useContext(MyContext);
  const { filterByNumericValues } = filters;

  const handleClickRemoveFilter = (index, target) => {
    // remove do estado Context e da tela as informaçoes da filtragem:
    const filterArrayRemove = filterByNumericValues.splice(index, 1);
    setFilters({
      ...filters,
      filterByNumericValues: [filterArrayRemove],
    });
    // remove a filtragem da tabela:
    setFiltered(undefined);
    // remove botao:
  };

  return (
    <div className="filters-list">
      {
        filterByNumericValues.length > 0
          ? filterByNumericValues.map((filter, index) => (
            <div key={ index } data-testid="filter">
              <p>{ filter.column }</p>
              <p>{ filter.comparison }</p>
              <p>{ filter.value }</p>
              <button
                type="button"
                onClick={ () => handleClickRemoveFilter(index) }
              >
                X

              </button>
            </div>
          ))
          : <p> Filtragens Vazia... </p>
      }
    </div>
  );
}

export default FiltersList;
