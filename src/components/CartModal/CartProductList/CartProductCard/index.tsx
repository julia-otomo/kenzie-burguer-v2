import { MdDelete } from 'react-icons/md';
import { SyntheticEvent, useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../Contexts/CartContext';
import { StyledButton } from '../../../../styles/button';

interface iCartProductCardProps {
  id: number;
  name: string;
  img: string;
  quantity: number;
}

const CartProductCard = ({
  id,
  name,
  img,
  quantity,
}: iCartProductCardProps) => {
  const { removeProductFromCart, cart, addQuantity } = useContext(CartContext);

  const buttonSubmitSub = (event: SyntheticEvent<HTMLButtonElement>) => {
    const buttonId = event.currentTarget.id;

    const productFound = cart.find(
      (product) => product.id === Number(buttonId)
    );

    if (productFound) {
      removeProductFromCart(productFound);
    }
  };

  const buttonSubmitAdd = (event: SyntheticEvent<HTMLButtonElement>) => {
    const buttonId = event.currentTarget.id;

    const productFound = cart.find(
      (product) => product.id === Number(buttonId)
    );

    if (productFound) {
      addQuantity(productFound);
    }
  };

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='contentBox'>
        <div className='product-information_container'>
          <StyledTitle tag='h3' $fontSize='three'>
            {name}
          </StyledTitle>
          <div className='product-quantity_container'>
            <button
              type='button'
              id={String(id)}
              className='sub_button'
              onClick={(event) => buttonSubmitSub(event)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              type='button'
              id={String(id)}
              className='add_button'
              onClick={(event) => buttonSubmitAdd(event)}
            >
              +
            </button>
          </div>
        </div>

        <button
          type='button'
          aria-label='Remover'
          id={String(id)}
          onClick={(event) => buttonSubmitSub(event)}
          className='delete_button'
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
