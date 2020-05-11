import React from "react";
import { ScrollView, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { SvgXml } from "react-native-svg";

const arrowLeft = `
<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M1.00186 9.95861L7.30311 17.1313C7.8394 17.6229 8.36449 17.6229 8.87843 17.1313C9.39236 16.6397 9.38119 16.1258 8.84491 15.5895L3.14697 9.1542L8.84491 2.78591C9.38119 2.24963 9.39236 1.72453 8.87843 1.2106C8.36449 0.696659 7.8394 0.70783 7.30311 1.24411L1.00186 8.41682C0.77841 8.64027 0.666687 8.89723 0.666687 9.18771C0.666687 9.4782 0.77841 9.73516 1.00186 9.95861Z" fill="white"/>
</svg>
`
const arrowRight = `
<svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8.25382 9.95861L1.95256 17.1313C1.41628 17.6229 0.891183 17.6229 0.37725 17.1313C-0.136688 16.6397 -0.125517 16.1258 0.410765 15.5895L6.10871 9.1542L0.410765 2.78591C-0.125517 2.24963 -0.136688 1.72453 0.37725 1.2106C0.891183 0.696659 1.41628 0.70783 1.95256 1.24411L8.25382 8.41682C8.47727 8.64027 8.58899 8.89723 8.58899 9.18771C8.58899 9.4782 8.47727 9.73516 8.25382 9.95861Z" fill="white"/>
</svg>
`

const imageIcon = `
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
<path d="M93,17H7c-1.1,0-2,0.9-2,2v62c0,1.1,0.9,2,2,2h86c1.1,0,2-0.9,2-2V19C95,17.9,94.1,17,93,17z M91,21v22.5l-16-9.3
	c0,0,0,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0
	c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1
	c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0L44.8,59.5L26.1,46.4c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1
	c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0
	c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1L9,58.7V21H91z M9,79
	V63.9l16.1-13.4l18.7,13.1c0,0,0,0,0,0c0.1,0.1,0.3,0.2,0.5,0.2c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.5,0.1c0,0,0,0,0,0c0,0,0,0,0,0
	c0,0,0,0,0,0c0.1,0,0.3,0,0.4,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.3-0.2
	c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0l27.9-25L91,48.2V79H9z M45,47c5.5,0,10-4.5,10-10s-4.5-10-10-10s-10,4.5-10,10S39.5,47,45,47z
	 M45,31c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S41.7,31,45,31z"/>
</svg>
`

const width = Math.round(Dimensions.get('window').width)
const height = width * 0.6

export default function Carousel(item) {
    const [ coord, setCoord ] = React.useState([])
    const [ isImageLoaded, setIsImageLoaded ] = React.useState(false)
    let n = 1
    const scrollview_ref = React.useRef(null)
    
    const ArrowLeft = () => <SvgXml width="20" height="20" xml={arrowLeft} />
    const ArrowRight = () => <SvgXml width="20" height="20" xml={arrowRight} />
    const ImageIcon = () => <SvgXml width="60" height="60" xml={imageIcon} />

    return(
        <>
        <ScrollView
            ref={scrollview_ref}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center', justifyContent: 'space-between'}}
            scrollEnabled={false}
        >
            {
                item.item.item.galery.map((image, key) => (
                    <View
                        key={key}
                        onLayout={(event) => {
                            setCoord([...coord, (event.nativeEvent.layout.x)])
                        }}
                    >
                        <Image
                            source={{uri: image}}
                            style={{width , height, resizeMode: 'cover'}}
                            onLoad={() => setIsImageLoaded(true)}
                        />

                        {
                            !isImageLoaded && 
                            (
                                <View style={{ position: 'absolute', width, height }}>
                                    <ImageIcon />
                                </View>
                            )
                        }

                        <View style={{
                            width,
                            height,position: 'absolute',
                            backgroundColor: 'rgba(0, 0, 0, 0.29)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 17
                        }}>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
        <View style={{position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width}}>
            <TouchableOpacity onPress={() => {
                if(n === 1){
                    scrollview_ref.current.scrollTo({x: coord[coord.length - 1], y: 0, animated: true})
                    n = coord.length
                } else if(n > 1) {
                    scrollview_ref.current.scrollTo({x: coord[n - 2], y: 0, animated: true})
                    n = n - 1
                }
            }}>
                <ArrowLeft />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                scrollview_ref.current.scrollTo({x: coord[n], y: 0, animated: true})
                n = (n % coord.length) + 1
            }}>
                <ArrowRight />
            </TouchableOpacity>
        </View>
        </>
    )
}