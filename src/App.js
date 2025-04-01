import { useState, useMemo } from 'react';

import data, { uniqueCategories } from './data.js';
import { parsePrice } from './helpers';

import ProductHeader from './components/ProductHeader/ProductHeader.jsx';
import CategoryButton from './components/CategoryButton/CategoryButton.jsx';
import ShowAllButton from './components/ShowAllButton/ShowAllButton.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';

import './App.css';

function App() {
  // state
  const [currentCategory, setCurrentCategory] = useState('');

  // memoized data
  const totalProducts = useMemo(() => {
    return data.length;
  }, []);

  const totalCategories = useMemo(() => {
    return uniqueCategories.length;
  }, []);

  const filteredProducts = useMemo(() => {
    return data.filter(
      (product) =>
        !currentCategory || product.category === currentCategory
    );
  }, [currentCategory]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [filteredProducts]);

  const totalUnitsInInventory = useMemo(() => {
    return data.reduce((acc, p) => acc + p.units, 0);
  }, []);

  const totalCostOfInventory = useMemo(() => {
    return data.reduce(
      (acc, p) => acc + p.units * parsePrice(p.price),
      0
    );
  }, []);

  return (
    <div className="App">
      <ProductHeader
        totalProducts={totalProducts}
        totalCategories={totalCategories}
        totalUnitsInInventory={totalUnitsInInventory}
        totalCostOfInventory={totalCostOfInventory}
      ></ProductHeader>
      <div className="CategoryButtonsContainer">
        {uniqueCategories.sort().map((category) => {
          return (
            <CategoryButton
              key={category}
              categoryName={category}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            ></CategoryButton>
          );
        })}
        <ShowAllButton
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></ShowAllButton>
      </div>
      <div className="ProductCardsContainer">
        {sortedProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
