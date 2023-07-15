import { Layout } from './Layout/Layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from 'pages/Login/LoginPage';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { Contact } from './Contact/Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/auth/authOperation';
import { selectRefresh } from 'redux/auth/selector';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isRefreshing = useSelector(selectRefresh);

  return isRefreshing ? (
    <p>Refreshing...</p>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<Contact />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
