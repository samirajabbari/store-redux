import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import styles from "./Styles/Products.module.css";
import { queryAnalyse } from "../Helpers/Helpers";
import API from "../../Services/config";

function Slider({ selected, setSelected, setQuery }) {
  const catogoryList = [
    { id: 1, title: "All" },
    { id: 2, title: "Electronics" },
    { id: 3, title: "Jewelery" },
    { id: 4, title: "Men's clothing" },
    { id: 5, title: "Women's clothing" },
  ];
  const categoryHandler = (event) => {
    const category = event.target.id;
    console.log(category);
    setSelected(category);

    setQuery((query) => queryAnalyse(query, { category }));
  };

  return (
    <div>
      <div className={styles.sideBar}>
        <div className={styles.categories}>
          <p>
            <FontAwesomeIcon icon={faList} />
            <span>Categories</span>
          </p>
          <ul onClick={categoryHandler}>
            {catogoryList.map((list) => {
              return (
                <li
                  id={list.title.toLowerCase()}
                  className={selected === list.title ? styles.active : null}
                  key={list.id}
                >
                  {list.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Slider;
