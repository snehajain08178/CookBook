import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../Screens/HomeScreen/HomeScreen';
import SettingScreen from './../Screens/SettingScreen/SettingScreen';
import ProfileScreen from './../Screens/ProfileScreen/ProfileScreen';
import AddScreen from './../Screens/AddScreen/AddScreen';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEnt from 'react-native-vector-icons/Entypo';
import { View, Text } from 'react-native';
import { blue, lightgrey, grey } from './../Colors/Colors';

const Tab = createBottomTabNavigator();

const NavigationBottom = () => {
    return (
        <NavigationContainer>
          <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let icondot = 'dot-single';
                    color = focused ? blue : grey
                    size = 25
                    if (route.name === 'Home') {
                        iconName =  'home'
                        return (
                            <View>
                                <IconSimple name={iconName} size={size} color={color} />
                                {focused && <IconEnt name={icondot} size={size} color={color} />}
                            </View>
                        )
                    } 
                    else if (route.name === 'Setting') {
                        iconName = 'ios-settings';
                        return (
                            <View>
                                <IconIon name={iconName} size={size} color={color} />
                                {focused && <IconEnt name={icondot} size={size} color={color} />}
                            </View>
                        )
                    }
                    else if (route.name === 'Add') {
                        iconName = 'pluscircle';
                        return (
                            <View>
                                <IconAnt name={iconName} size={size} color={color} />
                                {focused && <IconEnt name={icondot} size={size} color={color} />}
                            </View>
                        )
                    }
                    else if (route.name === 'Profile') {
                        iconName = 'user';
                        return (
                            <View>
                                <IconFont name={iconName} size={size} color={color} />
                                {focused && <IconEnt name={icondot} size={size} color={color} />}
                            </View>
                        )
                    }
                },
            })}
            tabBarOptions={{
                showLabel: false,
                style:{height:70}
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
}

export default NavigationBottom;