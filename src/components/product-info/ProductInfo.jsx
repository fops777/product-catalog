import "../../main.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductInfo.module.css";
import { Context } from "../../providers/Context";
import Price from "../home/product-item/Price";

function ProductInfo() {
  const { productInfo } = useContext(Context);

  return (
    <div>
      <Link to="/">
        <button className="backBtn">&#10150;</button>
      </Link>

      {productInfo ? (
        <div className="container">
          <div className={styles.item}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${productInfo.image})`,
              }}
            />
            <div className={styles.info}>
              <h2 className={styles.title}>{productInfo.title}</h2>
              <p className={styles.description}>{productInfo.description}</p>
              <p className={styles.category}>{productInfo.category}</p>
              <div className={styles.rating}>
                rating: {productInfo.rating.rate}
              </div>
              <div className={styles.price}>
                <Price price={productInfo.price} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default ProductInfo;
