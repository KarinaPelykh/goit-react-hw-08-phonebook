import { Layout } from './Layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from 'pages/Login/LoginPage';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { Contact } from './Contact/Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/auth/authOperation';
import { selectRefresh } from 'redux/auth/selector';
import { HomePage } from 'pages/HomePage/HomePage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRout } from './RestrictedRout/RestrictedRout';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isRefreshing = useSelector(selectRefresh);

  return isRefreshing ? (
    <p>Refreshing...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RestrictedRout component={<HomePage />} />} />

        <Route
          path="contacts"
          element={
            <PrivateRoute restrictetTo="/login" component={<Contact />} />
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRout
              restrictetTo="/contacts"
              component={<LoginPage />}
            />
          }
        />

        <Route
          path="register"
          element={
            <RestrictedRout
              restrictetTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
