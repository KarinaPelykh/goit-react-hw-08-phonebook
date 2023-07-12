import styles from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <form className={styles.form}>
      <label class="modal-form-lable" for="email">
        Email
      </label>
      <input
        className={styles.input}
        type="email"
        name="email"
       
        placeholder="email"
      />
      <label class="modal-form-lable" for="email">
        Password
      </label>
      <input
        className={styles.input}
        type="password"
        name="password"
    
        placeholder="password"
      />
      <button className={styles.button}>Login</button>
    </form>
  );
};
