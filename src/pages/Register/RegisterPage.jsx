import styles from './RegisterPage.module.css';
export const RegisterPage = () => {
  return (
    <form className={styles.formRRegisteregester}>
      <label class="modal-form-lable" for="email">
        Name
      </label>
      <input
        className={styles.inputRegister}
        type="name"
        name="name"
        placeholder="name"
      />
      <label class="modal-form-lable" for="email">
        Email
      </label>
      <input
        className={styles.inputRegister}
        type="email"
        name="email"
        placeholder="email"
      />
      <label class="modal-form-lable" for="email">
        Password
      </label>
      <input
        className={styles.inputRegister}
        type="password"
        name="password"
        placeholder="password"
      />
      <button className={styles.btn}>Login</button>
    </form>
  );
};
