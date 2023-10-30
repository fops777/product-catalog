import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ProductsProvider = ({ children }) => {
  // PRODUCT DETAIL-INFO STORAGING
  const [productInfo, setProductInfo] = useState();
  let parsedData = JSON.parse(localStorage.getItem("productInfo"));
  useEffect(() => {
    if (!productInfo) {
      setProductInfo(parsedData);
    }
  }, []);

  // ALL PRODUCTS STORAGING
  const [products, setProducts] = useState(); // Массив всех products
  const productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
  products && localStorage.setItem("products", JSON.stringify(products));

  useEffect(() => {
    if (!productsFromLocalStorage) {
      const fetchData = async () => {
        let promise = await fetch("https://fakestoreapi.com/products");
        let response = await promise.json();
        setProducts(response);
      };
      fetchData();
    } else {
      setProducts(productsFromLocalStorage);
    }
  }, []);

  return (
    <Context.Provider
      value={{ productInfo, setProductInfo, products, setProducts }}
    >
      {children}
    </Context.Provider>
  );
};
export default ProductsProvider;
