/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { createContext, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';
import {
  iCartProviderProps,
  iProductInformation,
  iCartContextValue,
  iCartProductInformation,
} from './@types';
import { api } from '../../Services/api';

export const CartContext = createContext({} as iCartContextValue);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const getCartList = localStorage.getItem('@CART');
  const [productList, setProductList] = useState<iProductInformation[]>([]);
  const [cart, setCart] = useState<iCartProductInformation[]>(
    getCartList ? JSON.parse(getCartList) : []
  );
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);
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
  }, [cart]);

  const editProductQuantity = (
    callback: (currentQuantity: number) => number,
    productFound: iCartProductInformation
  ) => {
    const newProducts = cart.map((product) => {
      if (productFound.id === product.id) {
        return { ...product, quantity: callback(productFound.quantity) };
        // eslint-disable-next-line no-else-return
      } else {
        return product;
      }
    });

    setCart(newProducts);
  };

  const addToCart = (
    currentProduct: iProductInformation | iCartProductInformation
  ) => {
    const productInCart = cart.find(
      (product) => product.id === currentProduct.id
    );

    if (productInCart) {
      editProductQuantity((quantity) => quantity + 1, productInCart);
    } else {
      const productToCart = { ...currentProduct, quantity: 1 };
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
    toast.success('Todos os itens foram retirados do carrinho');
  };

  const filterProductsByInput = () => {
    if (input !== '') {
      const filterProducts = productList.filter(
        (product) =>
          product.name.toLowerCase().includes(input.toLowerCase()) ||
          product.category?.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredProducts(filterProducts);
    } else {
      setFilteredProducts([]);
    }
  };

  const totalCartCalc = () => {
    const calc = cart.reduce((accumulator, currentValue) => {
      if (currentValue.price !== undefined) {
        return accumulator + currentValue.price;
      }
      return accumulator;
    }, 0);
    return calc;
  };

  const clearFilteredList = () => {
    setInput('');
    setFilteredProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        productList,
        cart,
        input,
        setInput,
        showModal,
        setShowModal,
        newProductsList,
        addToCart,
        removeProductFromCart,
        removeAllProductsFromCart,
        filterProductsByInput,
        totalCartCalc,
        filteredProducts,
        setFilteredProducts,
        clearFilteredList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
