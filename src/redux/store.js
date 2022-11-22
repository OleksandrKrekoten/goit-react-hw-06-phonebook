import { configureStore } from '@reduxjs/toolkit';
import { contactSlice, filterSlice } from './contactSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'contactList',
    storage,
    blacklist: ['filter'],
};

const persistedContactReducer = persistReducer(
    persistConfig,
    contactSlice.reducer
);

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    
});
export const persistor = persistStore(store);
