import React,{ Component } from 'react';

const INITIAL_STATE = {
  contacts: [],
  name: '',
};

class FormAddContacts extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleSubmit = evt => {
    const { name, value } = evt.target;
    evt.preventDefault();
    console.log(evt.target);
  };


  render() {
    return (
      <div className=''>
        <h1 className=''>Phonebook</h1>
        <form className='' onSubmit={this.handleSubmit}>
          <label>
            <p className=''>Name</p>
            <input
              className=''
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
