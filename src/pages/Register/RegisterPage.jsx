import { useDispatch } from 'react-redux';
import styles from './RegisterPage.module.css';
import { authRegisters } from 'redux/auth/authOperation';
export const RegisterPage = () => {
  const dispatch = useDispatch();

  const oSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const user = {
      [name.name]: name.value,
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(user);
    dispatch(authRegisters(user));
    e.target.reset();
  };

  return (
    <form onSubmit={oSubmit} className={styles.formRRegisteregester}>
      <input
        className={styles.inputRegister}
        type="name"
        name="name"
        placeholder="name"
        required
      />

      <input
        className={styles.inputRegister}
        type="email"
        name="email"
        placeholder="email"
        required
      />

      <input
        className={styles.inputRegister}
        type="password"
        name="password"
        placeholder="password"
        required
      />
      <button type="submit" className={styles.btn}>
        Register
      </button>
    </form>
  );
};
