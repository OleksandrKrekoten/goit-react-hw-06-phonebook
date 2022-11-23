
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Name, DeleteBtn } from './ListContact.styled';
import { removeContacts } from 'redux/contactSlice';
export const ListContacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const query = useSelector(state => state.filter);
     function getvisiableTodos ()  {
         return contacts.filter(({ name }) =>
             name.toLowerCase().includes(query.toLowerCase())
         );
    };
    const visiableTodos = getvisiableTodos()
    return (
        <List>
            {visiableTodos.map(({ id, name, number }) => (
                <Item key={id}>
                    <Name>{name}</Name>
                    <p>{number}</p>
                    <DeleteBtn
                        id={id}
                        onClick={e => {
                            dispatch(removeContacts(e.target.id));
                        }}
                    >
                        delete
                    </DeleteBtn>
                </Item>
            ))}
        </List>
    );
};

