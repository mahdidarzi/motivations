import React from 'react';
import { View, Text,I18nManager } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import Categoty from './src/screens/Categoty';
import DrawerMenu from './src/screens/DrawerMenu';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import Reminder from './src/screens/Reminder';
import Them from './src/screens/Them';
I18nManager.forceRTL(false);
const CustomDrawerContentComponent = props => (
  <View>
    <View

    >
      <DrawerMenu />
    </View>
  </View>
);
const test = createDrawerNavigator({
  Home: Home,
  Categoty: Categoty,
  DrawerMenu: DrawerMenu,
  Reminder: Reminder,
  Them: Them,

},
  {
    contentComponent: CustomDrawerContentComponent,
    drawerWidth: '100%',
    initialRouteName: 'Home',

  },

);
export default createAppContainer(test);
//  createAppContainer(AppNavigator);
// export default class App extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text>hello</Text>
//       </View>
//     )
//   }
// } 