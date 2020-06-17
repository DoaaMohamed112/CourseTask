import { combineReducers } from "redux";

import Courses from "./courses";

import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist:['Courses']

}
const rootReducer = combineReducers({
  Courses,
});
export default persistReducer(rootPersistConfig, rootReducer)


