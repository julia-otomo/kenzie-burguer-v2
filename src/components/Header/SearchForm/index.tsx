import { MdSearch } from 'react-icons/md';
import { SyntheticEvent, useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../Contexts/CartContext';

const SearchForm = () => {
  const { input, setInput, filterProductsByInput } = useContext(CartContext);

  const buttonSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    filterProductsByInput();
  };

  return (
    <StyledSearchForm>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        value={input}
        onChange={(event) => setInput(event.currentTarget.value)}
      />
      <StyledButton
        type='submit'
        $buttonSize='medium'
        $buttonStyle='green'
        onClick={buttonSubmit}
      >
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
