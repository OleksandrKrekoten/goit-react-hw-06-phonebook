import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { SearchForm } from './SearchForm/SearchForm';
import { Section } from './Section/Section';
import { selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
export function App() {
    const contacts = useSelector(selectContacts);
    return (
        <div>
            <Section title="Phonebook">
                <FormAddContacts />
            </Section>
            <Section title="Contacts">
                {!!contacts.length ? (
                    <>
                        <SearchForm />
                        <ListContacts />
                    </>
                ) : (
                    <p>Add your first contact</p>
                )}
            </Section>
        </div>
    );
}
