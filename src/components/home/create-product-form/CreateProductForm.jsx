import "../../../main.css";
import styles from "./CreateProductForm.module.css";
import { useForm } from "react-hook-form";
// react-hook-form is used here

const CreateProductForm = function ({ products, setProducts }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // для того чтобы всплывали подсказки на этапе набора
  });

  const createProductBtn = (data) => {
    let newObj = {
      name: data.name,
      price: data.price,
      id: Date.now(),
    };
    setProducts([...products, newObj]);
    reset(); // сброс полей ввода
  };

  return (
    <form onSubmit={handleSubmit(createProductBtn)}>
      <input
        {...register("name", { required: "Name is neccessary" })}
        placeholder="mark"
        type="text"
        className={styles.input}
      />
      <br />
      <p>{errors?.name?.message}</p>

      <input
        {...register("price", { required: "Price is neccessary" })}
        placeholder="price"
        type="number"
        className={styles.input}
      />
      <p>{errors?.price?.message}</p>

      <button className={styles.add_button}>add+</button>
    </form>
  );
};

export default CreateProductForm;
