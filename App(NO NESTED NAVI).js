//Without NESTED NAVIGATORS

import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScren';
import MealDetailScreen from './screens/MealDetailScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Stack is an object which contains Navigator and Screen
const Stack=createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        
          <Stack.Navigator screenOptions={{ //ScreenOptions apply style to header and screen of all the screens
            contentStyle:{backgroundColor:"#ebc291"}
            }}> 
            <Stack.Screen name='MealsCategories' component={CategoryScreen} options={{ //options are used to specify header styles and screen background colours of that particular screen. Check doc for more info
              title:"All Categories",
              headerStyle:{backgroundColor:"#ffd8ab"}, //bg of header
              headerTintColor:"white", //color of header text
              contentStyle:{backgroundColor:"#ebc291"} //bg of screen
            }}/>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} 
                // options={({route,navigation})=>{ //Dynamically setting the title of header
                //     const catId=route.params.categoryId
                //     return {
                //       title:catId
                //  }}}
            />
            <Stack.Screen name="MealDetails" component={MealDetailScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
      
      <StatusBar style="dark" />
    </>
  );
}
