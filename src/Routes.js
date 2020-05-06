import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { List } from "./List";
import { Photo } from "./Photo";

const Stack = createStackNavigator();

export const Routes = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={List}/>
          <Stack.Screen name="Photo" component={Photo}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};
