
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {


  return (
    <div>
      <ContactForm/>
      <Filter/>
      <ContactList/>
    </div>
  );
};
