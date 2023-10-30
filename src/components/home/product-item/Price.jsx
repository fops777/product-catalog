import React from "react";
import styles from "../Home.module.css";

function Price({ price }) {
  return (
    <p>
      {new Intl.NumberFormat("ru-Ru", {
        style: "currency",
        currency: "USD",
      }).format(price)}
    </p>
  );
}

export default React.memo(Price); // Повышение производительности, теперь price не перерендеривается каждый раз
