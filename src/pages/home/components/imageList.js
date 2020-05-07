import React from "react";
import { View, FlatList, Text, Button, Dimensions } from "react-native";

import Carousel from './carousel';

export default function Feed(item) {
    return(
        <>
            <View style={{backgroundColor: '#4A90E2', height: 33, justifyContent: 'center'}}>
                <Text style={{marginLeft: 17, color: '#fff', fontWeight: '600'}}>{item.item.item.category}</Text>
            </View>
            <FlatList
                data={item.item.item.items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                    
                    return (
                        <View style={{justifyContent: 'center'}}>
                            <Carousel item={item} />
                            
                            <View style={{position: 'absolute', bottom: 10, marginLeft: 17, paddingRight: '20%'}}>
                                <Text style={{color: '#fff', fontWeight: '600'}}>{item.item.title.toUpperCase()}</Text>
                                <Text style={{color: '#fff', opacity: 0.8, }}>
                                    {item.item.description.slice(0, item.item.description.indexOf('.') + 1)}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />
        </>
    )
}