/* eslint-disable no-console */
import { createContext, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';
import {
  iCartProviderProps,
  iProductInformation,
  iCartContextValue,
} from './interface';
import { api } from '../../Services/api';

export const CartContext = createContext({} as iCartContextValue);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const getCartList = localStorage.getItem('@CART');
  const [productList, setProductList] = useState<iProductInformation[]>([]);
  const [cart, setCart] = useState<iProductInformation[]>(
    getCartList ? JSON.parse(getCartList) : []
  );
  const [cartLength, setCartLength] = useState(0);
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState<
    iProductInformation[]
  >([]);
  const newProductsList =
    filteredProducts.length > 0 ? filteredProducts : productList;

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      const getAllProducts = async () => {
        try {
          const products = await api.get('/products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProductList(products.data);
        } catch (error) {
          console.log(error);
        }
      };

      getAllProducts();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@CART', JSON.stringify(cart));
    setCartLength(cart.length);
  }, [cart]);

  const addToCart = (productFound: iProductInformation) => {
    const productInCart = cart.some(
      (product) => product.id === productFound.id
    );

    if (productInCart) {
      toast.warning('Esse produto já foi adicionado ao carrinho');
    } else {
      const productToCart = { ...productFound };
      productToCart.quantity = quantity;
      setCart([...cart, productToCart]);
      toast.success('Produto adicionado ao carrinho');
    }
  };

  const removeProductFromCart = (productFound: iProductInformation) => {
    const removeProduct = cart.filter(
      (product) => product.id !== productFound.id
    );
    setCart(removeProduct);
    toast.success('Produto removido com sucesso');
  };

  const removeAllProductsFromCart = () => {
    setCart([]);
  };

  const addMoreQuantity = (productFound: iProductInformation) => {
    setQuantity(quantity + 1);
    if (productFound.quantity) {
      if (productFound.quantity > 0) {
        // eslint-disable-next-line no-param-reassign
        productFound.price *= productFound.quantity;
      }
    }
  };

  const removeQuantity = (productFound: iProductInformation) => {
    if (productFound.quantity) {
      if (productFound.quantity > 0) {
        setQuantity(quantity - 1);
        // eslint-disable-next-line no-param-reassign
        productFound.price *= productFound.quantity;
      }
    }
  };

  const filterProductsByInput = () => {
    if (input !== '') {
      const filterProducts = productList.filter(
        (product) =>
          product.name.toLowerCase().includes(input.toLowerCase()) ||
          product.category.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredProducts(filterProducts);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        productList,
        cart,
        cartLength,
        input,
        setInput,
        showModal,
        setShowModal,
        quantity,
        newProductsList,
        addToCart,
        removeProductFromCart,
        removeAllProductsFromCart,
        addMoreQuantity,
        removeQuantity,
        filterProductsByInput,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
