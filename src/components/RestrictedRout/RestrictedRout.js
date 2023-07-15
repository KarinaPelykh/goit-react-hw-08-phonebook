import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selctorlogged } from 'redux/auth/selector';

export const RestrictedRout = ({
  component: Component,
  restrictetTo = '/',
}) => {
  const LoggedIn = useSelector(selctorlogged);
  return LoggedIn ? <Navigate to={restrictetTo} /> : Component;
};
