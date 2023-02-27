import { MdDelete } from 'react-icons/md';
import { SyntheticEvent, useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../Contexts/CartContext';
import { iProductInformation } from '../../../../Contexts/CartContext/interface';

const CartProductCard = ({ id, name, img }: iProductInformation) => {
  const { removeProductFromCart, cart } = useContext(CartContext);

  const buttonSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    const buttonId = event.currentTarget.id;

    const productFound = cart.find(
      (product) => product.id === Number(buttonId)
    );

    if (productFound) {
      removeProductFromCart(productFound);
    }
  };

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          id={String(id)}
          onClick={(event) => buttonSubmit(event)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
