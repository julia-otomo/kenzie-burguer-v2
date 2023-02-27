import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../Contexts/CartContext';

const ProductList = () => {
  const { productList } = useContext(CartContext);
  return (
    <StyledProductList>
      {productList.map((product) => (
        <ProductCard
          id={product.id}
          category={product.category}
          img={product.img}
          name={product.name}
          price={product.price}
          key={product.id}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
