import "../../main.css";
import styles from "./Home.module.css";
import CreateCarForm from "./create-product-form/CreateProductForm";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import ProductItem from "./product-item/ProductItem";
import { Context } from "../../providers/Context";
import { Link } from "react-router-dom";

function Home() {
  const { products, setProducts } = useContext(Context);
  const { users, loggedUser, setLoggedUser } = useContext(AuthContext);
  const logOutClick = () => {
    setLoggedUser(null);
    localStorage.setItem("loggedUser", null);
  };

  return (
    <div>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.header_content}>
            {/* <CreateCarForm products={products} setProducts={setProducts} /> */}
            <h3>Products app</h3>
            <div className={styles.login_container}>
              {loggedUser ? (
                <>
                  <h2>Hi, {loggedUser.name}</h2>
                  <Link onClick={logOutClick} className={styles.log_btn}>
                    log out
                  </Link>
                </>
              ) : (
                <Link to="/login" className={styles.log_btn}>
                  log in
                </Link>
              )}
              <Link to="/admin" className={styles.settings_btn}>
                &#9881;
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className="container">
          <div className={styles.content_container}>
            {products
              ? products.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
              : "No products for now, sorry"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
