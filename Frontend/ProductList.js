// src/components/ProductList.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <Card key={product.id} style={{ margin: '10px', maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://via.placeholder.com/150"
            alt={product.productName}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {product.productName}
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
      ))}
    </div>
  );
};

export default ProductList;
