import { createSlice } from '@reduxjs/toolkit';
export const contactSlice = createSlice({
    name: 'contacts',
    initialState: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    reducers: {
        addContact: (state, { payload }) => [payload, ...state],
        removeContacts: (state, { payload }) =>
            state.filter(contact => contact.id !== payload),
    },
});
export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filteredContacts: (state, { payload }) => payload,
    },
});
export const { addContact, removeContacts } = contactSlice.actions;
export const { filteredContacts } = filterSlice.actions;
