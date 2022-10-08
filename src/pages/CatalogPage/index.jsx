import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../store/products/productsActions";

const CatalogPage = () => {
  const {isLoading,products,error} = useSelector((state)=>state.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  },[])

  return (
    <div>
      {
        products.length
        ?
          products.map(product =>(
              <div key={product.id}>{product.name}</div>
            ))
          :
          ''
      }

    </div>
  );
};

export default CatalogPage;
