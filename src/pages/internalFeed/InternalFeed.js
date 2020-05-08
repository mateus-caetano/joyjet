import React from "react";
import { View, Image, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";

const arrow = `
<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.07048C0 7.19548 0.0208331 7.32048 0.0625 7.44548C0.104167 7.57048 0.187499 7.67465 0.3125 7.75798L6.3125 13.758C6.77084 14.258 7.23958 14.2684 7.71875 13.7892C8.19792 13.3101 8.1875 12.8413 7.6875 12.383L3.4375 8.07048H23C23.2917 8.07048 23.5312 7.97673 23.7188 7.78923C23.9063 7.60173 24 7.36215 24 7.07048C24 6.77881 23.9063 6.53923 23.7188 6.35173C23.5312 6.16423 23.2917 6.07048 23 6.07048H3.4375L7.6875 1.75798C8.1875 1.29965 8.19792 0.830902 7.71875 0.35173C7.23958 -0.127438 6.77084 -0.117022 6.3125 0.382982L0.3125 6.38298C0.187499 6.46631 0.104167 6.57048 0.0625 6.69548C0.0208331 6.82048 0 6.94548 0 7.07048Z" fill="white"/>
</svg>
`
const star = `
<svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9898 9.43137C25.7859 8.78562 25.3441 8.41177 24.6643 8.3098L17.629 7.2902L14.5192 0.917647C14.2133 0.305879 13.7205 0 13.0408 0C12.361 0 11.8682 0.305879 11.5624 0.917647L8.45255 7.2902L1.41726 8.3098C0.737514 8.41177 0.295688 8.78562 0.0917656 9.43137C-0.112157 10.0771 0.0237893 10.6379 0.499609 11.1137L5.59765 16.0588L4.37412 23.0941C4.27216 23.7399 4.49307 24.2667 5.03686 24.6745C5.30876 24.8784 5.63163 24.9804 6.00549 24.9804C6.27739 24.9804 6.53229 24.9124 6.7702 24.7765L13.0408 21.4627L19.3114 24.7765C19.5493 24.9124 19.8042 24.9804 20.0761 24.9804C20.4499 24.9804 20.7728 24.8784 21.0447 24.6745C21.5885 24.2667 21.8094 23.7399 21.7075 23.0941L20.4839 16.0588L25.582 11.1137C26.0578 10.6379 26.1937 10.0771 25.9898 9.43137ZM18.7506 15.498L20.0761 23.349L13.0408 19.6275L6.00549 23.349L7.33098 15.498L1.62118 9.94118L9.52314 8.81961L13.0408 1.63137L16.5584 8.81961L24.4604 9.94118L18.7506 15.498Z" fill="white"/>
</svg>
`

export default function InternalFeed({ route, navigation }) {
    const item = route.params.item.item
    const category = route.params.category
    const width = Dimensions.get('window').width
    const height = width * 0.6
    const Arrow = () => <SvgXml width='24' height='14' xml={arrow} />
    const Star = () => <SvgXml width='26' height='25' xml={star} />

    return (
        <ScrollView>
            <View>
                <Image style={{ width, height }} source={{uri: item.galery[0]}} />
                <View style={{ position: 'absolute', height, width, backgroundColor: 'rgba(0, 0, 0, 0.29)' }}>
                    <TouchableOpacity style={{ position: 'absolute', left: 15, top: 15 }} onPress={() => navigation.goBack()}>
                        <Arrow />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: 'absolute', right: 15, top: 15 }}>
                        <Star />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ paddingLeft: 16, paddingVertical: 18 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 24, color: '#434343' }}>{item.title.toUpperCase()}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'normal', lineHeight: 17, color: '#4A90E2', marginTop: 3 }}>{category.toLowerCase()}</Text>
            </View>
            <Text style={{ paddingHorizontal: 16, fontSize: 16, fontWeight: '300', lineHeight: 28, color: '#67686D' }}>{item.description}</Text>
        </ScrollView>
    )
}