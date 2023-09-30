const { ContactForm } = require('components/ContactForm/ContactForm');
const { ContactList } = require('components/ContactList/ContactList');
const { Filter } = require('components/Filter/Filter');
const { useEffect } = require('react');
const { useDispatch, useSelector } = require('react-redux');
const { fetchContacts } = require('redux/contacts/operations');
const { selectIsLoading, selectError } = require('redux/contacts/selectors');

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ margin: '30px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 style={{ marginBottom: '10px' }}>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
