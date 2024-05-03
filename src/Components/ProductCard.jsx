import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faBasketShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import { selectCount, shortTitle } from "./Helpers/Helpers";
import { addItem, decrease, increase,removeItem } from "../Feature/cart/cartSlice";

// import { useCart } from "./Contex/CartContex";

function ProductCard({ data }) {
  const state = useSelector((store) => store.cartSlice);
  console.log(state);
  const selecCount = selectCount(state, data.id);
  const dispatch = useDispatch();
  //-----------State-----------
  // const [count, setCount] = useState(0);
  // const [state, distpatch] = useCart();

  //------------------------------
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={data.image} alt={data.category} />
      </div>
      <div className={styles.detail}>
        <div className={styles.top}>
          <p>{shortTitle(data.title)}</p>
          <span>{data.price}$</span>
        </div>
        <div className={styles.buttom}>
          <Link to={`/products/${data.id}`} className={styles.detail}>
            <FontAwesomeIcon icon={faQrcode} />
          </Link>
          <div className={styles.addtoCard}>
            {selecCount===0 && <button onClick={() => dispatch(addItem(data))}>
              <FontAwesomeIcon icon={faBasketShopping} />
            </button>}
            {selecCount === 1 && (
              <>
                <button onClick={() => dispatch(removeItem(data))}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <span>{selecCount}</span>
                <button onClick={() => dispatch(increase(data))}>+</button>
              </>
            )}
            {selecCount > 1 && (
              <>
                <button onClick={() => dispatch(decrease(data))}>-</button>
                <span>{selecCount}</span>
                <button onClick={() => dispatch(increase(data))}>+</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
