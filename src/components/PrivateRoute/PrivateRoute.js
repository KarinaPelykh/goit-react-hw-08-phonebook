import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selctorlogged, selectRefresh } from 'redux/auth/selector';

export const PrivateRoute = ({ component: Component, restrictetTo = '/' }) => {
  const Refresh = useSelector(selectRefresh);
  const LoggedIn = useSelector(selctorlogged);
  const shouldRedirect = !LoggedIn && !Refresh;
  return shouldRedirect ? <Navigate to={restrictetTo} /> : Component;
};
