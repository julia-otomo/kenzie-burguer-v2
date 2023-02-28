import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../Contexts/CartContext';

const CartProductList = () => {
  const { cart, removeAllProductsFromCart, totalCartCalc } =
    useContext(CartContext);
  const total = totalCartCalc();

  return (
    <StyledCartProductList>
      <ul>
        {cart.map((product) => (
          <CartProductCard
            id={product.id}
            img={product.img}
            name={product.name}
            key={product.id}
            quantity={product.quantity}
          />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {total.toLocaleString('pt-BR')}
        </StyledParagraph>
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
