import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import * as Yup from 'yup';
import 'yup-phone';
import { Form, Field, Button } from './FormAddContacts.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
const initialValues = {
    name: '',
    phoneNumber: '',
};
export function FormAddContacts() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.persistedRoot.contacts);
    const validationSchema = Yup.object({
        name: Yup.string().required().max(40).trim(),
        phoneNumber: Yup.string().phone('UA', true).required(),
    });

    const handleSubmit = (values, actions) => {
        setTimeout(() => actions.setSubmitting(false), 500);
        const { name, phoneNumber } = values;
        const newContact = {
            id: nanoid(),
            name: name,
            number: phoneNumber,
        };
        contacts.find(
            contact =>
                contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
            ? Notiflix.Notify.failure(
                  `${newContact.name} is already in contacts.`
              )
            : dispatch(addContact(newContact));

        actions.resetForm();
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => {
                return (
                    <Form>
                        <label>
                            <span>Name</span>
                            <Field name="name" placeholder="your name" />
                            <ErrorMessage name="name" component="div" />
                        </label>
                        <label>
                            <span>Phone Number</span>
                            <Field
                                name="phoneNumber"
                                placeholder="+38 0** *** ** **"
                            />
                            <ErrorMessage name="phoneNumber" component="div" />
                        </label>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting
                                ? 'adding to contacts...'
                                : 'Add contact'}
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
}
