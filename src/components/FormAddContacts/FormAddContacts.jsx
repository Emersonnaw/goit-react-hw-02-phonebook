import React,{ Component } from 'react';
import { nanoid } from 'nanoid'
const INITIAL_STATE = {
  contacts: [],
  name: '',
};

class FormAddContacts extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleSubmit = e => {
    e.preventDefault();
   
    this.setState((prevState) => {
      console.log(e);
     
      return {
        contacts: [{name:[prevState.name]}],
      }
    });
   
   
  };

  handleChange = e => {
    const { name,value } = e.target;
    this.setState({ [name]: value });
    // this.setState({contacts: { [name]: value }});
  }

  render() {
    const { name} = this.state;
    return (
      <div className=''>
        <h1 className=''>Phonebook</h1>
        <form className='' onSubmit={this.handleSubmit}>
          <label>
            <p className=''>Name</p>
            <input
              onChange={this.handleChange}
              className=''
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <button className='' type="submit">Add contact</button>
          </label>
        </form>
        <h2>Contacts</h2>


      </div>
    );
  }
}

export default FormAddContacts;
