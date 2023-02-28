import { useContext } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { CartContext } from '../../Contexts/CartContext';
import { StyledContainer } from '../../styles/grid';
import { SearchInformation } from '../../components/SearchInformation';

const ShopPage = () => {
  const { showModal, filteredProducts } = useContext(CartContext);

  return (
    <StyledShopPage>
      {showModal ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          {filteredProducts.length > 0 ? <SearchInformation /> : null}
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
