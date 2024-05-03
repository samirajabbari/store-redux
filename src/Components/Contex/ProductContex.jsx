import React, { createContext, useContext, useEffect, useState } from "react";

import API from "../../Services/config";

const productContex = createContext();

function ProductProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const productFetch = async () => {
      const response = await API.get("/products");
      setData(response);
    };
    productFetch();
  }, []);

  return (
    <div>
      <productContex.Provider value={data}>{children}</productContex.Provider>
    </div>
  );
}
const sendProduct = () => {
  const products = useContext(productContex);
  return products;
};
export default ProductProvider;
export { sendProduct };
