import {Navigation} from 'react-native-navigation'

import AuthScreen from './src/Screens/Auth/Auth'
import SharePlace from './src/Screens/SharePlace/SharePlace'
import FindPlace from './src/Screens/FindPlace/FindPlace'
import PlaceDetails from './src/Screens/placeDetails/placeDetails'
import SideDrawer from './src/Screens/SideDrawer/SideDrawer'

import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'

const store=configureStore();


//Register Screens
Navigation.registerComponent("awesome-places.AuthScreen",()=>AuthScreen,store,Provider);
Navigation.registerComponent("awesome-places.SharePlace",()=>SharePlace,store,Provider);
Navigation.registerComponent("awesome-places.FindPlace",()=>FindPlace,store,Provider);
Navigation.registerComponent("awesome-places.PlaceDetails",()=>PlaceDetails,store,Provider);
Navigation.registerComponent("awesome-places.SideDrawer",()=>SideDrawer);


//Start Login Screen
Navigation.startSingleScreenApp({
  screen:{
    screen:"awesome-places.AuthScreen",
    title:"Login"
  }
});
