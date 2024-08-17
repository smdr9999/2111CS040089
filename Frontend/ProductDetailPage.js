// src/pages/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetail from '../components/ProductDetail';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const fetchProductDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/categories/${id}/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <CircularProgress /> : product && <ProductDetail product={product} />}
    </div>
  );
};

export default ProductDetailPage;
