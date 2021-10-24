import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from 'pages/Auth/module/reducers';
import thunk from 'redux-thunk';
// Control login & logout with a library
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// Control login & logout with a library ends

const rootReducer = combineReducers({
    authReducer,
});

// config redux-persist library
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer'] // to store at local storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
// config redux-persist library ends

const store = createStore(
    // rootReducer,
    persistedReducer, // after combination with redux-persist
    composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// config redux-persist library
const persistor = persistStore(store);

export { store, persistor };