import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import {createWrapper} from "next-redux-wrapper";
import rootReducers from '../reducers'
import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

interface configureStoreProps {
  debug: boolean | false
}

function configureStore(preloadedState?: configureStoreProps) {

  const composeEnhancers = composeWithDevTools;


  console.log({preloadedState})
  // @ts-ignore
  const store = createStore(
    rootReducers,
    //@ts-ignore
    // preloadedState,
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

const store = configureStore();

const wrapper
  = createWrapper(
  //@ts-ignore
  configureStore,
  {debug: true }
)
export {
  store,
  wrapper
}