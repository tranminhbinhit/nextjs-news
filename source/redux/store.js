// https://techwatch.dev/snippet/how-to-setup-store-and-redux-persist-with-nextjs-for-ssr
import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import rootReducer from "./reducers/rootReducer";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
  } else {
    const { persistStore, persistReducer } = require("redux-persist");

    const storage =
      typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();
    const persistConfig = {
      key: "enowNews",
      whitelist: [],//["app", "setting"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    );

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore, {
  debug: false,
});
