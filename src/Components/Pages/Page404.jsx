import styles from "./Styles/Page404.module.css";
import { useNavigate } from "react-router-dom";
function Page404() {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.content}>404</h1>
      <p className={styles.message}>Like that Page does'n exist</p>
      <button onClick={backHandler} className={styles.backBtn}>
        {" "}
        Back{" "}
      </button>
    </div>
  );
}

export default Page404;
