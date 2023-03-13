import { View } from 'react-native'
import React from 'react'
import CardDetail from '../components/CardDetail'

const Images = () => {
    return (
        <View>
            <CardDetail textData="This is my first image"
                imgSrc={require('../../assets/text1.jpeg')} />
            <CardDetail textData="This is my second image"
                imgSrc={require('../../assets/text1.jpeg')} />
            <CardDetail textData="This is my third image"
                imgSrc={require('../../assets/text1.jpeg')} />
        </View>
    )
}

export default Images

