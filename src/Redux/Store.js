import {legacy_createStore as createstore} from 'redux';
import  reducers  from './reducers/index';


const store = createstore(reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;