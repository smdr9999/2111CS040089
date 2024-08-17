import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductDetailPage from './pages/ProductDetailPage';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
