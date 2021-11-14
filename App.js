
import React from 'react';
import AppState from './context/AppState'
import {
  View,
  Text
} from 'react-native';

import Drawer from './components/drawer';


const App= ()=>{
  return(
    <AppState>
      <Drawer />
    </AppState>
  )
}
export default App;
