import { createStore, combineReducers } from 'redux';
import UserInformation from './user/UserInformation';

const modules = combineReducers({
    UserInformation,

});

const createReduxStore = () => createStore(modules);

export default createReduxStore;
