import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Components/Layout";
import Page404 from "./Components/Pages/Page404";
import Products from "./Components/Pages/Products";
import Checkout from "./Components/Pages/Checkout";
import Detail from "./Components/Pages/Detail";
import ProductProvider from "./Components/Contex/ProductContex";
import CartProvider from "./Components/Contex/CartContex";

function App() {
  return (
    <>
      {/* <CartProvider>
        <ProductProvider> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="*" element={<Page404 />} />
          <Route path="products" element={<Products />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="products/:id" element={<Detail />} />
        </Routes>
      </Layout>
      {/* </ProductProvider>
      </CartProvider> */}
    </>
  );
}

export default App;
