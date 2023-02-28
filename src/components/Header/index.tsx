import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../Contexts/CartContext';
import { UserContext } from '../../Contexts/UserContext';

const Header = () => {
  const { logout } = useContext(UserContext);
  const { setShowModal, cart } = useContext(CartContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <div className='shop-cart_container'>
                <span>{cart.length}</span>
                <button
                  type='button'
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <MdShoppingCart size={28} />
                </button>
              </div>

              <button type='button' onClick={logout}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
