import styles from "../Home.module.css";
import { Link } from "react-router-dom";
import Price from "./Price";
import React from "react";
import { useContext } from "react";
import { Context } from "../../../providers/Context";
import { AuthContext } from "../../../providers/AuthProvider";

function ProductItem({ product }) {
  const { productInfo, setProductInfo } = useContext(Context);
  const { loggedUser } = useContext(AuthContext);
  function getInfo() {
    setProductInfo(product);
    localStorage.setItem("productInfo", JSON.stringify(product));
  }

  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.low_cont}>
          <div className={styles.price}>
            <Price price={product.price} className={styles.price} />
          </div>
          {loggedUser ? (
            <Link to={`/product/${product.id}`}>
              <button onClick={getInfo} className={styles.btn}>
                show more
              </button>
            </Link>
          ) : (
            <Link to={`/login`}>
              <button onClick={getInfo} className={styles.btn}>
                show more
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
