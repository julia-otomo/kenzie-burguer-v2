export interface iCartProviderProps {
  children: React.ReactNode;
}

export interface iProductInformation {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

export interface iCartProductInformation extends iProductInformation {
  quantity: number;
}

export interface iCartContextValue {
  productList: iProductInformation[];
  cart: iCartProductInformation[];
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  newProductsList: iProductInformation[];
  addToCart: (
    productFound: iProductInformation | iCartProductInformation
  ) => void;
  removeProductFromCart: (productFound: iCartProductInformation) => void;
  removeAllProductsFromCart: () => void;
  filterProductsByInput: () => void;
  totalCartCalc: () => number;
  filteredProducts: iProductInformation[];
  setFilteredProducts: React.Dispatch<
    React.SetStateAction<iProductInformation[]>
  >;
  clearFilteredList: () => void;
  addQuantity: (currentProduct: iCartProductInformation) => void;
}
