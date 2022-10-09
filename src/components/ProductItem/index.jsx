import React from "react";
import styles from './ProductItem.module.scss'

export const ProductItem = ({product}) => {
  return (
    <div className={styles.container}>
      <h2>{product.name}</h2>
      <div className={styles.additional}>
        <h3>{product.cost}$</h3>
        <p>На складе осталось: {product.quantity}</p>
      </div>
    </div>
  )
};

