import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../screens/Main';
import Settings from '../screens/Settings'

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator headerMode="none" initialRouteName="Main">
    <App.Screen name="Main" component={Main} />
    <App.Screen name="Settings" component={Settings} />
  </App.Navigator>
);

export default Routes;
