
import { useEffect, useState } from "react";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";

export const App =()=> {
  const [contacts, setContacts] = useState(()=>{
    const  contacts  = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts) {
      return  contacts ;
		}else {
      return [];
    }
  }); 
  const [filter, setFilter] = useState('');

useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts))
 }, [contacts])
  
  const    handleAddContact = (name, number ) => {
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  if (existingContact) {
  alert(`${name} is already in the contacts!`);
  return
} 
setContacts(prevContacts => ( [...prevContacts, { name, id:crypto.randomUUID(), number }]));

  };


 const handleInputSearchName = (filter) => {
    setFilter(filter);
    
  };


  
  const handelDeleteContact = (id) => {
  setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
};

  
const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <ContactForm
          onAddContact={handleAddContact}
        />
        <Filter
          onInputSearchName={handleInputSearchName} />
        <ContactList
          value={filter} 
          onDeleteContact={handelDeleteContact}
          contacts={filteredContacts}
        />
        </div>
    );
  }

