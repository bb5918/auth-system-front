import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/BottomTab/HomeScreen";
import LongTermScreen from "../screens/BottomTab/LongTermScreen";
import RecomScreen from "../screens/BottomTab/RecomScreen";
import MyPageScreen from "../screens/BottomTab/MyPageScreen";
import StampScreen from "../screens/BottomTab/StampScreen";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function mainFlow() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="홈" component={HomeScreen} />
      <BottomTab.Screen name="장기목표" component={LongTermScreen} />
      <BottomTab.Screen name="추천" component={RecomScreen} />
      <BottomTab.Screen name="스탬프" component={StampScreen} />
      <BottomTab.Screen name="마이페이지" component={MyPageScreen} />
    </BottomTab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} /> */}
        <Stack.Screen name="mainFlow" component={mainFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
