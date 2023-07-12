import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const Contact = () => {
  return (
    <div style={{ margin: ' 120px' }}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
