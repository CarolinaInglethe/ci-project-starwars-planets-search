import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Filters from './components/Filters';
import FiltersList from './components/FiltersList';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Header />
      <Filters />
      <FiltersList />
      <Table />
    </MyProvider>
  );
}

export default App;
