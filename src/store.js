import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
// import { composeWithDevTools } from "redux-devtools-extension";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const middleware = [thunk];

const initialState = {};

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

// export const store;
