import * as React from "react";
import Colors from '../constants/Colors';

import PinScreen from '../screens/PinScreen';
import HomeScreen from '../screens/HomeScreen';
import ModalScreen from '../screens/ModalScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotFoundScreen from "../screens/NotFoundScreen";
import CreatePinScreen from "../screens/CreatePinScreen";

import AuthStackNavigator from "./AuthStackNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

import { 
  RootTabParamList, 
  RootStackParamList, 
  RootTabScreenProps,
} from '../types';
import { 
  Pressable,
  ColorSchemeName, 
} from 'react-native';
import { 
  DarkTheme,
  DefaultTheme, 
  NavigationContainer, 
} from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import { 
  createBottomTabNavigator 
} from '@react-navigation/bottom-tabs';
import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';


import useColorScheme from '../hooks/useColorScheme';

function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Root" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Pin" 
        component={PinScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="NotFound" 
        component={NotFoundScreen} 
        options={{ title: 'Oops!' }} 
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="CreatePin"
        component={CreatePinScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Navigation;
