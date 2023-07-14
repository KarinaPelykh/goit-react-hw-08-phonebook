import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handelSubmit = e => {
    e.preventDefault();

    const existingContact = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (existingContact) {
      alert(`${name} is already in the contacts!`);
      return;
    }

    dispatch(addContactThunk({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form className={styles.form} onSubmit={handelSubmit}>
        <p className={styles.text}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[A-Za-zА-Яа-яЁё]+\s?[A-Za-zА-Яа-яЁё]+$"
          title="Name may contain only letters and a single space in between. For example Rosie Simpson"
          required
          value={name}
          onChange={handleInputChange}
        />
        <p className={styles.text}>Nomber</p>
        <input
          type="tel"
          name="number"
          pattern="^\d{3}(-?\d{2}){1,2}$"
          title="Phone number must be in the format 123-45-7 or 123457"
          required
          value={number}
          onChange={handleInputChange}
        />
        <button className={styles.btn}>Add contact</button>
      </form>
    </>
  );
};
