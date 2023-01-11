import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Categories.scss';

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesLocation = searchParams.get('categories') || '';
    fetch(`http://10.58.52.62:3000/products/tag/${categoriesLocation}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [searchParams.length, searchParams]);

  return (
    <div>
      {categories.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Categories;
