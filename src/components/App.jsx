
import { Component } from "react";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts:[],
    filter: "",
  };


  componentDidMount() {
    let contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts) {
			this.setState({ contacts: contacts })
		}
		

}
 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  
  
  }
  
handleAddContact = (name, number ) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(contact=> contact.name.toLowerCase() === name.toLowerCase());
if (existingContact) {
  alert(`${name} is already in the contacts!`);
  return
} 
  this.setState((prevState) => ({
contacts: [...prevState.contacts, { name, id: crypto.randomUUID(), number }],
}));

  };
  handleInputSearchName = (filter) => {
    this.setState({ filter:filter});
    
  };

  handelDeleteContact = (id) => {

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id)
      
  })) 
}

  render() {
    const { contacts,  filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <ContactForm
          onAddContact={this.handleAddContact}
        />
        <Filter
          onInputSearchName={this.handleInputSearchName} />
        <ContactList
          value={filter} 
          onDeleteContact={this.handelDeleteContact}
          contacts={filteredContacts}
     
        />
     
        
      </div>
    );
  }
}
