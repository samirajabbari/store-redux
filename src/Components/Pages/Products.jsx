import { ColorRing } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faList } from "@fortawesome/free-solid-svg-icons";
// import { sendProduct } from "../Contex/ProductContex";
import ProductCard from "../ProductCard";
import styles from "./Styles/Products.module.css";
import { useEffect, useState } from "react";
import { useActionData, useSearchParams } from "react-router-dom";
import {
  searchQuery,
  seachCategory,
  queryAnalyse,
  saveQuery,
} from "../Helpers/Helpers";
import Search from "./Search";
import Slider from "./Slider";
import { useSelector, useDispatch } from "react-redux";
import { fettchProduct } from "../../Feature/Product/productSlice";
function Products() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [backupProduct, setBackupProduct] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  // const product = sendProduct();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productSlice);
  useEffect(() => {
    dispatch(fettchProduct());
  }, []);

  useEffect(() => {
    setQuery(saveQuery(searchParams));
    setBackupProduct(products);
  }, [products]);

  useEffect(() => {
    // console.log(query);
    let searchResult;
    setSearchParams(query);
    setSearch(query.search || "");
    setSelected(query.category || "");
    searchResult = searchQuery(products, query.search);
    setBackupProduct(searchResult);
    searchResult = seachCategory(searchResult, query.category);
    setBackupProduct(searchResult);
  }, [query]);

  return (
    <>
      <Search search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.containerBody}>
        <div className={styles.container}>
          <div className={styles.loader}>
            {loading && (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            )}
          </div>
          <div className={styles.products}>
            {backupProduct.map((data) => {
              return <ProductCard key={data.id} data={data} />;
            })}
          </div>
        </div>
        <Slider
          selected={selected}
          setSelected={setSelected}
          setQuery={setQuery}
        />
      </div>
    </>
  );
}

export default Products;
