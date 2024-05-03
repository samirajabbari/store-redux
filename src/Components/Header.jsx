import styles from "./Styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  // const [state] = useCart();
  const state = useSelector((store) => store.cartSlice.productCounter);

  return (
    <div className={styles.container}>
      <h2>BotoShop</h2>
      <Link to={"/checkout"}>
        <div className={styles.card}>
          {!!state && <span>{state}</span>}
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Header;
