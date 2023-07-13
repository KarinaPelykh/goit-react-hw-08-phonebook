import { Link } from 'react-router-dom';
import styles from './sdd.module.css';

const routes = [
  { path: '/register', text: 'Register' },
  { path: '/login', text: 'Login' },
];

export const AuthNav = () => {
  return (
    <div>
      <ul className={styles.list}>
        {routes.map(route => (
          <li key={route.path} className={styles.item}>
            <Link to={route.path}>{route.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
