// src/pages/AllProducts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import { Pagination, CircularProgress } from '@mui/material';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async (filters = {}) => {
    setLoading(true);
    try {
      const response = await axios.get(`/categories/${filters.category}/products`, {
        params: {
          n: 10,
          page: page,
          minPrice: filters.minPrice || 0,
          maxPrice: filters.maxPrice || 1000000,
          sortBy: filters.sortBy,
          order: filters.order
        }
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (filters) => {
    fetchProducts(filters);
  };

  return (
    <div>
      <ProductFilter onFilter={handleFilter} />
      {loading ? <CircularProgress /> : <ProductList products={products} />}
      <Pagination
        count={totalPages}
        page={page + 1}
        onChange={(e, value) => setPage(value - 1)}
      />
    </div>
  );
};

export default AllProducts;
