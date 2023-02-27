import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { iProductInformation } from '../../../Contexts/CartContext/interface';
import { CartContext } from '../../../Contexts/CartContext';

const ProductCard = ({
  id,
  name,
  category,
  price,
  img,
}: iProductInformation) => {
  const { addToCart, productList } = useContext(CartContext);

  const findProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = Number(event.currentTarget.id);

    // eslint-disable-next-line eqeqeq
    const productFound = productList.find((product) => product.id == buttonId);

    if (productFound) {
      addToCart(productFound);
    }
  };

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>R${price}</StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          id={String(id)}
          onClick={(event) => findProduct(event)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
