import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../Contexts/CartContext';

const CartProductList = () => {
  const { cart, removeAllProductsFromCart } = useContext(CartContext);

  return (
    <StyledCartProductList>
      <ul>
        {cart.map((product) => (
          <CartProductCard
            id={product.id}
            img={product.img}
            name={product.name}
          />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ 14,00</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={removeAllProductsFromCart}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
