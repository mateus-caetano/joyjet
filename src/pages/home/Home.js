import React from "react";
import { View, FlatList, ScrollView, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";

import axios from 'axios'

import Feed from "./components/imageList";

const menuIcon = `
<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.1 8.8H20.9C21.2208 8.8 21.4844 8.69688 21.6906 8.49063C21.8969 8.28437 22 8.02083 22 7.7C22 7.37917 21.8969 7.11563 21.6906 6.90937C21.4844 6.70312 21.2208 6.6 20.9 6.6H1.1C0.779165 6.6 0.515626 6.70312 0.309375 6.90937C0.103124 7.11563 0 7.37917 0 7.7C0 8.02083 0.103124 8.28437 0.309375 8.49063C0.515626 8.69688 0.779165 8.8 1.1 8.8ZM1.1 2.2H20.9C21.2208 2.2 21.4844 2.09688 21.6906 1.89063C21.8969 1.68437 22 1.42083 22 1.1C22 0.779165 21.8969 0.515627 21.6906 0.309373C21.4844 0.103123 21.2208 0 20.9 0H1.1C0.779165 0 0.515626 0.103123 0.309375 0.309373C0.103124 0.515627 0 0.779165 0 1.1C0 1.42083 0.103124 1.68437 0.309375 1.89063C0.515626 2.09688 0.779165 2.2 1.1 2.2ZM1.1 15.4H20.9C21.2208 15.4 21.4844 15.2969 21.6906 15.0906C21.8969 14.8844 22 14.6208 22 14.3C22 13.9792 21.8969 13.7156 21.6906 13.5094C21.4844 13.3031 21.2208 13.2 20.9 13.2H1.1C0.779165 13.2 0.515626 13.3031 0.309375 13.5094C0.103124 13.7156 0 13.9792 0 14.3C0 14.6208 0.103124 14.8844 0.309375 15.0906C0.515626 15.2969 0.779165 15.4 1.1 15.4Z" fill="#434343"/>
</svg>
`

export default function Home() {

    const [ data, setData ] = React.useState([])
    const navigation = useNavigation()
    
    const loadData = async () => {
        await axios.get('https://cdn.joyjet.com/tech-interview/mobile-test-one.json')
        .then((res) => {
            setData(res.data)
        })
    }

    const MenuIcon = () => <SvgXml width="22" height="16" xml={menuIcon} />

    const Header = () => (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: 'rgba(250, 250, 250, 0.9)' }}>
            <Text style={{color: '#4A90E2', fontWeight: '300'}}>Home</Text>
            <TouchableOpacity style={{position: 'absolute', right: 15}} onPress={() => navigation.openDrawer()}>
                <MenuIcon />
            </TouchableOpacity>
        </View>
    )

    React.useEffect(() => {
        loadData()
    }, [])

    return(
        <View style={{ flex: 1 }}>
            <Header />
            <FlatList
                data={data}
                keyExtractor={ (item, index) => index.toString() }
                renderItem={(item) => <Feed item={item} />}
            />
        </View>
    )
}