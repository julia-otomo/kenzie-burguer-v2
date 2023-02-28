import { useContext } from 'react';
import { StyledSearchDiv } from './styled';
import { CartContext } from '../../Contexts/CartContext';
import { StyledButton } from '../../styles/button';
import { StyledTitle } from '../../styles/typography';

export const SearchInformation = () => {
  const { input, clearFilteredList } = useContext(CartContext);

  return (
    <StyledSearchDiv>
      <StyledTitle tag='h3' $fontSize='two' className='search_title'>
        Resultados de busca para: {input}
      </StyledTitle>
      <StyledButton
        $buttonSize='medium'
        $buttonStyle='green'
        onClick={clearFilteredList}
      >
        Voltar
      </StyledButton>
    </StyledSearchDiv>
  );
};
