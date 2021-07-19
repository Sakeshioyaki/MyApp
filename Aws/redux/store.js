import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import reducer from './reducers';
import rootSaga from './sagas';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Blacklist (Don't Save Specific Reducers)
  whitelist: ['app', 'auth'],
  timeout: 0,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Apply middleware
const sagaMiddleware = createSagaMiddleware();

//Enchaner for Reactotron, react-native-debugger
// const enhancers =
//   ENV.environment === "dev"
//     ? compose(
//         applyMiddleware(sagaMiddleware),
//         Reactotron.createEnhancer(),
//         (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//           (window as any).__REDUX_DEVTOOLS_EXTENSION__()
//       )
//     : applyMiddleware(sagaMiddleware);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
