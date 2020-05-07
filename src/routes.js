import React from 'react'
import { View, Dimensions, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, } from "@react-navigation/drawer";
import { SvgXml } from "react-native-svg";

import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import InternalFeed from "./pages/internalFeed/InternalFeed";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const joyjetIcon = `
<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M48 0C21.471 0 0 21.5045 0 48C0 74.4955 21.5045 96 48 96C74.4955 96 96 74.4955 96 48C96 21.5045 74.529 0 48 0ZM53.8283 27.5673L64.1786 43.7125L53.7613 43.746L53.8283 27.5673ZM48.1345 7.80516L48.134 7.80461C47.866 8.07257 44.5834 11.7572 43.411 19.8632C44.8849 20.1312 46.4927 20.2652 48.134 20.2987C49.7753 20.2987 51.3831 20.1312 52.8569 19.8632C51.6518 11.7621 48.4059 8.11053 48.1345 7.80516ZM15.2073 63.8102H24.9881C28.8402 63.8102 31.9218 60.7285 31.9218 56.9435L31.8214 47.3301H36.7118V58.4843C36.7118 58.5178 36.6113 60.695 36.0084 61.8339C34.8025 64.0782 33.1947 65.7865 31.0844 67.0593C28.7732 68.4662 26.6964 68.7341 23.7153 68.7341H15.2073V63.8102ZM15.2073 74.1605H24.9881C34.501 74.1605 42.2387 66.4564 42.2722 56.977V47.3636H37.3147V58.5178C37.3147 58.6183 37.2142 60.896 36.5443 62.1354C35.305 64.4466 33.6301 66.2554 31.4194 67.5953C28.9742 69.1026 26.8304 69.3706 23.7153 69.3706H15.2073V74.1605ZM42.2387 43.746L31.7879 43.7125L42.3726 27.5673L42.2387 43.746ZM45.8562 47.6315C46.1242 51.9525 48.134 54.4648 48.134 54.4648C48.134 54.4648 50.1438 51.7181 50.2107 47.6985C49.9304 47.6985 49.6419 47.7067 49.3492 47.7149L49.3486 47.7149L49.3484 47.7149C49.047 47.7234 48.7412 47.732 48.4355 47.732C47.5646 47.732 46.6936 47.6985 45.8562 47.6315ZM48.3685 47.0956C46.4592 47.0956 44.5834 46.9281 42.8751 46.6267V44.3824C44.5834 44.6839 46.4592 44.8514 48.3685 44.8514C50.0433 44.8514 51.6511 44.7174 53.1919 44.4829V46.7271C51.6511 46.9616 50.0433 47.0956 48.3685 47.0956ZM48.0335 44.2819C49.8423 44.2484 51.5841 44.1144 53.1919 43.813C53.1728 40.6031 53.1973 35.2136 53.2156 31.1754V31.175V31.1748C53.2295 28.1337 53.2398 25.859 53.2254 25.859C53.2254 23.8493 53.0914 22.074 52.8904 20.4327C51.4166 20.7006 49.7753 20.8346 48.1005 20.8681C46.4257 20.8681 44.7844 20.7006 43.3105 20.4327C43.1096 22.074 42.9756 23.8828 42.9756 25.859L42.9741 26.048C42.9617 27.6194 42.8751 38.5887 42.8751 43.813C44.4829 44.1144 46.2582 44.2484 48.0335 44.2819ZM80.7927 74.1605H71.0119C61.499 74.1605 53.7278 66.4564 53.7278 56.9435V47.3301H58.6853V58.4843C58.6853 58.5848 58.7858 60.8625 59.4557 62.1019C60.695 64.4466 62.4034 66.2219 64.5806 67.5618C66.9923 69.0356 69.1696 69.3371 72.2847 69.3371H80.7927V74.1605ZM72.3182 68.7676H80.7927H80.8262V63.8437H71.0454C67.1933 63.8437 64.1116 60.762 64.1116 56.977L64.2121 47.3636H59.3217V58.5178C59.3217 58.5178 59.4222 60.7285 60.0251 61.8674C61.231 64.0782 62.8388 65.82 64.9491 67.0928C67.2268 68.4996 69.3036 68.7676 72.3182 68.7676Z" fill="white"/>
</svg>
`
const joyjetTextIcon = `
<svg width="103" height="18" viewBox="0 0 103 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.592 11.528V0.17603H2.416V3.80003H8.176V11.432C8.176 12.704 7.504 13.376 6.42401 13.376C5.44 13.376 4.12 12.752 2.896 11.48L0.880005 14.48C2.368 16.208 4.312 17.192 6.736 17.192C10.336 17.192 12.592 15.128 12.592 11.528ZM25.584 0.0560303C30.792 0.0560303 34.68 3.70403 34.68 8.57603C34.68 13.496 30.792 17.192 25.584 17.192C20.376 17.192 16.488 13.496 16.488 8.57603C16.488 3.68003 20.376 0.0560303 25.584 0.0560303ZM25.632 3.80003C23.112 3.80003 21 5.86403 21 8.60003C21 11.336 23.136 13.448 25.632 13.448C28.152 13.448 30.168 11.336 30.168 8.60003C30.168 5.86403 28.152 3.80003 25.632 3.80003ZM53.6 0.17603H49.208L45.32 7.40003L41.336 0.17603H36.944L43.136 11.744V17H47.528V11.624L53.6 0.17603ZM66.784 11.528V0.17603H56.608V3.80003H62.368V11.432C62.368 12.704 61.696 13.376 60.616 13.376C59.632 13.376 58.312 12.752 57.088 11.48L55.072 14.48C56.56 16.208 58.504 17.192 60.928 17.192C64.528 17.192 66.784 15.128 66.784 11.528ZM71.76 0.17603V17H85.272V13.496H76.152V10.328H84.168V6.82403H76.152V3.68003H85.032V0.17603H71.76ZM88.496 0.17603V3.80003H93.488V17H97.88V3.80003H102.92V0.17603H88.496Z" fill="white"/>
</svg>
`

const JoyjetIcon = () => <SvgXml width='96' height='96' xml={joyjetIcon} />
const JoyjetTextIcon = () => <SvgXml width='102' height='17' xml={joyjetTextIcon} />

const height = Dimensions.get('window').height - StatusBar.currentHeight

function DrawerContent(props) {
    return(
        <DrawerContentScrollView contentContainerStyle={{justifyContent: 'space-between'}}>
            <View 
                style={{ 
                    alignSelf: "flex-end",
                    marginTop: 32,
                    marginLeft: 32,
                    height
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

            <View>
                <View style={{ position: 'absolute', bottom: 50, right: 24 }}><JoyjetIcon /></View>
                <View style={{ position: 'absolute', bottom: 15, left: 24 }}><JoyjetTextIcon /></View>
            </View>
        </DrawerContentScrollView>
    )
}

function DrawerNavigation() {
    return (
        <Drawer.Navigator
            drawerPosition='right'
            drawerStyle={{ backgroundColor: '#434343' }}
            drawerContent={ props => <DrawerContent {...props} /> }
            initialRouteName='Home'
        >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Favorites' component={Favorites} />
        </Drawer.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Home' component={DrawerNavigation} />
                <Stack.Screen name='InternalFeed' component={InternalFeed} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}