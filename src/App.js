import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './routes/Books';
import Categories from './routes/Categories';
import Layout from './components/Layout';
import NoMatch from './routes/404';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
