import { Link, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';
export const Navigation = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link to="/contacts">Contact</Link>
            </li>
            <li className={styles.item}>
              <Link to="/login">Login</Link>
            </li>
            <li className={styles.item}>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
