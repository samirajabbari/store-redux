import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../Services/config";
import styles from "./Styles/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fettchProduct } from "../../Feature/Product/productSlice";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.productSlice.products.find((i) => i.id === +id)
  );

  useEffect(() => {
    dispatch(fettchProduct()); // صدا زدن اکشن برای دریافت اطلاعات از API
  }, [dispatch, id]);

  const backHandler = () => {
    navigate("/", { replace: true });
  };

  if (!product) {
    return <div>Loading...</div>; // یک مکانیزم نمایش لودینگ می‌توانید اضافه کنید
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <p>{product.description}</p>
        <button onClick={backHandler}>Back</button>
      </div>
    </div>
  );
}

export default Detail;
