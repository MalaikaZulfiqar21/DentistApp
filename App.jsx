import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootSiblingParent} from 'react-native-root-siblings';

import Navigation from './src/navigation';
import {persistor, store} from './src/store';

function App(props) {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer >
            <Navigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
}

export default App;
