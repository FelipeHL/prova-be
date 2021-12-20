import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation }) {
    return(
        <View style={style.pag}>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}> Zubat </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>  Rattata </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}> Pidgey </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}> Spearow </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}> Nidoran </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}> Goldeen </Text>
            </TouchableOpacity>
            <Image style={style.img} source={{uri:'https://static3.gamerantimages.com/wordpress/wp-content/uploads/2019/10/TM-Feature.jpg'}}/>
        </View>
    )
}