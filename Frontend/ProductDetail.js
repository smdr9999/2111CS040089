// src/components/ProductDetail.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductDetail = ({ product }) => {
  return (
    <Card style={{ margin: '20px', maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://via.placeholder.com/300"
        alt={product.productName}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography color="textSecondary">
          Company: {product.company}
        </Typography>
        <Typography color="textSecondary">
          Category: {product.category}
        </Typography>
        <Typography color="textSecondary">
          Price: ${product.price}
        </Typography>
        <Typography color="textSecondary">
          Rating: {product.rating}
        </Typography>
        <Typography color="textSecondary">
          Discount: {product.discount}%
        </Typography>
        <Typography color="textSecondary">
          Availability: {product.availability}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
