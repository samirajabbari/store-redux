import React from "react";
import styles from "./Styles/Products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { queryAnalyse } from "../Helpers/Helpers";

function Search({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    //({ ...query, search })
    setQuery((query) => queryAnalyse(query, { search }));
  };
  return (
    <div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={searchHandler} />
        </button>
      </div>
    </div>
  );
}

export default Search;
