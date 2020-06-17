import React from 'react';
import {StatusBar} from 'react-native';

import { Provider } from "react-redux";
import initialState from "./src/store/reducers/initialState";
import configureStore from "./src/store/storeConfiguration";
import Home from './src/screens/Home';
import Colors from './src/assets/globals/Colors';

const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor={Colors.statusbar} />
      <Home />
    </Provider>
  );
};
export default App;
