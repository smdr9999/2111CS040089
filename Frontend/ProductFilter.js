// src/components/ProductFilter.js
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const ProductFilter = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('');

  const handleSubmit = () => {
    onFilter({ category, company, minPrice, maxPrice, sortBy, order });
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Laptop">Laptop</MenuItem>
          {/* Add more categories as needed */}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Company</InputLabel>
        <Select value={company} onChange={(e) => setCompany(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="ANZ">ANZ</MenuItem>
          <MenuItem value="FLP">FLP</MenuItem>
          {/* Add more companies as needed */}
        </Select>
      </FormControl>
      <TextField
        label="Min Price"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <TextField
        label="Max Price"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="discount">Discount</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Order</InputLabel>
        <Select value={order} onChange={(e) => setOrder(e.target.value)}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Apply Filters
      </Button>
    </div>
  );
};

export default ProductFilter;
