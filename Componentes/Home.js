import { View, Text, Alert } from 'react-native'
import React from 'react'
import { estilos } from './Estilos'
import {FontAwesome} from '@expo/vector-icons'

const Home = () => {
  return (
    <View style={estilos.container}>
      <FontAwesome name='apple' size={150} onPress={()=>Alert.alert('si se puede')}/>
      <Text>Hola esto es el Home...</Text>
      
    </View>
  )
}

export default Home