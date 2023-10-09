//With NESTED NAVIGATORS - STACK AND DRAWER and also Context Api
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScren';
import MealDetailScreen from './screens/MealDetailScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import FavouriteScreen from './screens/FavouriteScreen';

import FavouritesContextProvider from './context/favourites-context';

const Stack=createNativeStackNavigator()
const Drawer=createDrawerNavigator()

function DrawerScreen(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen component={CategoryScreen} name="Category"/>
            <Drawer.Screen component={FavouriteScreen} name="Favourites"/>
        </Drawer.Navigator>
    
    )
        
}

export default function App() {
  return (
    <>
     <FavouritesContextProvider>
      <NavigationContainer>
        
          <Stack.Navigator screenOptions={{ 
            contentStyle:{backgroundColor:"#ebc291"}
            }}> 
            <Stack.Screen name='Drawer' component={DrawerScreen} options={{ 
                headerShown:false
            }}/>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
      </FavouritesContextProvider>
      <StatusBar style="dark" />
    </>
  );
}
