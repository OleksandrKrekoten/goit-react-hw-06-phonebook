import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { SearchForm } from './SearchForm/SearchForm';
import { Section } from './Section/Section';

export function App() {
    return (
        <div>
            <Section title="Phonebook">
                <FormAddContacts />
            </Section>
            <Section title="Contacts">
                <SearchForm />
                <ListContacts />
            </Section>
        </div>
    );
}
