import React from 'react';
import './ProductHeader.css';

export default function ProductHeader({
  totalProducts,
  totalCategories,
  totalUnitsInInventory,
  totalCostOfInventory,
}) {
  return (
    <header className="ProductHeader">
      <h3 className="ProductHeader__Item">
        Total Producsts: {totalProducts}
      </h3>
      <h3 className="ProductHeader__Item">
        Unique Categories: {totalCategories}
      </h3>
      <h3 className="ProductHeader__Item">
        Total Units in Inventory: {totalUnitsInInventory}
      </h3>
      <h3 className="ProductHeader__Item">
        Total Cost of Inventory: {totalCostOfInventory}
      </h3>
    </header>
  );
}
