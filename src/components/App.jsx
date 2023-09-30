import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/Home';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <div style={{ margin: '30px' }}>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2 style={{ marginBottom: '10px' }}>Contacts</h2>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
          <GlobalStyle />
        </div>
      </Route>
    </Routes>
  );
};
