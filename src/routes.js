import React from 'react'
import { View, } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, } from "@react-navigation/drawer";

import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";

const Drawer = createDrawerNavigator()

function DrawerContent(props) {
    return(
        <DrawerContentScrollView>
            <View 
                style={{ 
                    alignSelf: "flex-end",
                    marginTop: 32,
                    marginLeft: 32 
                }}
            >
                <DrawerItem
                    label='Home'
                    labelStyle={{ fontSize: 30, color: '#bbb' }}
                    onPress={ () => props.navigation.navigate('Home') }
                />
                <DrawerItem
                    label='Favorites'
                    labelStyle={{ fontSize: 30, color: '#bbb' }}
                    onPress={ () => props.navigation.navigate('Favorites') }
                />
            </View>
        </DrawerContentScrollView>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerPosition='right'
                drawerStyle={{ backgroundColor: '#434343' }}
                drawerContent={ props => <DrawerContent {...props} /> }
            >
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='Favorites' component={Favorites} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}