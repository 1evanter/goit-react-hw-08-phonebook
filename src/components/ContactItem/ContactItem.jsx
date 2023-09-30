import { Item } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return filteredContacts.map(({ name, number, id }) => {
    return (
      <Item key={id}>
        {name}: {number}
        <button onClick={() => dispatch(deleteContact(id))} type="button">
          Delete
        </button>
      </Item>
    );
  });
};
