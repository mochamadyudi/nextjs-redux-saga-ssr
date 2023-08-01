import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import {createWrapper} from "next-redux-wrapper";
import rootReducers from '../reducers'
import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas/index'
import {configureStoreProps} from "@yuyuid/interface";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]



function configureStore(preloadedState?: configureStoreProps) {
  const composeEnhancers = composeWithDevTools;
  // @ts-ignore
  const store = createStore(
    rootReducers,
    //@ts-ignore
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  //@ts-ignore
  if (module.hot) {
    //@ts-ignore
    module.hot.accept("../reducers/index", function () {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    })
  }

  return store

}

/**
 * @author mochamadyudi
 * @description - Call store in provider
 */
const store = configureStore();

/**
 * @author mochamadyudi
 * @description - Wrapper used if you setup page in serverSideProps at nextJS and setup initialProps in _app.tsx
 */
const wrapper
  = createWrapper(
  //@ts-ignore
  configureStore,
  {debug: false }
)
/**
 * @author mochamadyudi
 * @description - export store and wrapper
 */
export {
  store,
  wrapper
}