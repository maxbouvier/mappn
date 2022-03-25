import * as React from 'react';
import { Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

import { MapScreen } from './src/screens/map.screen';
import { CameraScreen } from './src/screens/camera.screen';
import { ProfileScreen } from './src/screens/profile.screen';


const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Map: "location-sharp",
    Camera: "ios-camera",
    Profile: "person",
  };

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

export default function App() {
    return (
        <>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0A0A0A' }}>
    <NavigationContainer>
    <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "#5CC5F3",
                  inactiveTintColor: "#64686E",
                  activeBackgroundColor: "#0A0A0A",
                  inactiveBackgroundColor: "#0A0A0A",
                  showLabel: false,
                }}>
        <Tab.Screen name="Map" component={MapScreen} options={{
            title: "MAPPN",
          headerStyle: {
            backgroundColor: '#0A0A0A',
            shadowColor: 'transparent'
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Button
              onPress={() => alert('Coming soon ;)')}
              title="Friends"
              color="#fff"
            /> ),
        }} />
        <Tab.Screen name="Camera" component={CameraScreen} options={{ headerShown: false, shadowColor: 'transparent' }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            title: "MAPPN",
          headerStyle: {
            backgroundColor: '#0A0A0A',
            shadowColor: 'transparent',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Button
              onPress={() => alert('Settings')}
              title="Settings"
              color="#fff"
            /> ),
        }} />
        </Tab.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    </>
  );
}