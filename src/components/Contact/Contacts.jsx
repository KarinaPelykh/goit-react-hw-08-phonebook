import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const Contact = () => {
  return (
    <div
      style={{
        marginLeft: '300px',
        marginTop: ' 110px',
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
