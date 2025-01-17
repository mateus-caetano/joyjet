import React from "react";
import { View, FlatList, Text, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Carousel from './carousel';

export default function Feed(item) {
    const navigation = useNavigation()
    const category = item.item.item.category

    return(
        <FlatList
            data={item.item.item.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => {
                
                return (
                    <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => {
                        navigation.navigate('InternalFeed', {
                            item,
                            category
                        })}} >
                        <Carousel item={item} />
                        
                        <View style={{position: 'absolute', bottom: 10, marginLeft: 17, paddingRight: '20%'}}>
                            <Text style={{color: '#fff', fontWeight: '600'}}>{item.item.title.toUpperCase()}</Text>
                            <Text style={{color: '#fff', opacity: 0.8, }}>
                                {item.item.description.slice(0, item.item.description.indexOf('.') + 1)}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}