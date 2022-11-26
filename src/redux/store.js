import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
    key: 'root',
    storage,
    blacklist: ['filter'],
};

const rootReducer = combineReducers({
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
});
const persistedRoot = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedRoot,
    
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
