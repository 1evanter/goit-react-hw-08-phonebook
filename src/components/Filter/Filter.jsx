import { useDispatch, useSelector } from 'react-redux';
import { Label, Input, Form } from './Filter.styled';
import { changeFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input
          type="text"
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          value={filter}
          name="filter"
        />
      </Label>
    </Form>
  );
};
