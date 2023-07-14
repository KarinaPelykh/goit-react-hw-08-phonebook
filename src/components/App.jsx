// import { ContactList } from './ContactList/ContactList';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from 'pages/Login/LoginPage';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { Contact } from './Contact/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/authOperation';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
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
