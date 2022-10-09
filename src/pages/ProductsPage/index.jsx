import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../store/products/productsActions";
import {Link, useNavigate} from "react-router-dom";
import {Loader} from '../../components/Loader';
import { ProductItem } from '../../components/ProductItem';
import styles from './ProductsPage.module.scss'

const CatalogPage = () => {
  const {products} = useSelector((state)=>state.products)
  const {accessToken} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts())
  },[])

  return (
    accessToken
      ?
    <div>
      {
        products.length
        ? 
          <div className={styles.list}>
          {products.map(product =>(
              <ProductItem product = {product} key={product.id}/>
          ))}
          </div>
          :
          <Loader/>
      }
    </div>
      :
      <div className={styles.redirect}>
        <h1>
          This page only for authorised users
        </h1>
        <h2>Please, <Link to='/login'>login</Link></h2>
      </div>
  );
};

export default CatalogPage;
