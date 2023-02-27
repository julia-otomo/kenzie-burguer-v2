export interface iCartProviderProps {
  children: React.ReactNode;
}

export interface iProductInformation {
  id: number;
  name: string;
  price?: number;
  category?: string;
  img: string;
  quantity?: number;
}

export interface iCartContextValue {
  productList: iProductInformation[];
  cart: iProductInformation[];
  cartLength: number;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  quantity: number;
  newProductsList: iProductInformation[];
  addToCart: (productFound: iProductInformation) => void;
  removeProductFromCart: (productFound: iProductInformation) => void;
  removeAllProductsFromCart: () => void;
  addMoreQuantity: (productFound: iProductInformation) => void;
  removeQuantity: (productFound: iProductInformation) => void;
  filterProductsByInput: () => void;
}
