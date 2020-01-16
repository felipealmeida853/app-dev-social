import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Pages/Main';
import Profile from './Pages/Profile';

const Routes = createAppContainer(
   createStackNavigator({
        Main:{
           screen: Main,
           navigationOptions:{
              title: 'App Dev'
           },
        },
        Profile:{
         screen: Profile,
         navigationOptions:{
            title: 'Perfil no Github'
         },
      },
   }, {
      defaultNavigationOptions:{
         headerTintColor: '#FFF',
         headerBackTitleVisible: null,
         headerStyle:{
            backgroundColor: '#7d40e7'
         }
      },
   })
);

export default Routes;