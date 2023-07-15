import { useState } from 'react';
import styles from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { authLogin } from 'redux/auth/authOperation';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: '', password: '' });
  const handelChanges = ({ target }) => {
    const { name, value } = target;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(authLogin(user));
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label className={styles.lable} for="email">
        Email
      </label>
      <input
        onChange={handelChanges}
        className={styles.input}
        type="email"
        name="email"
        placeholder="email"
      />
      <label className={styles.lable} for="email">
        Password
      </label>
      <input
        onChange={handelChanges}
        className={styles.input}
        type="password"
        name="password"
        placeholder="password"
      />
      <button className={styles.button}>Login</button>
    </form>
  );
};
