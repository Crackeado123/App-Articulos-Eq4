import { View, Text, ActivityIndicator, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { estilos } from './Estilos'

const Productos = () => {
    const [data,setData]=useState([])
    const [load,setLoad]=useState(false)
    const nav =useNavigation()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoad(true)
        })
    },[])

    const Uscreen=()=>{
        return(
            <View>
                <ActivityIndicator color={'darkblue'}/>
                <Text>Cargando Datos...</Text>
            </View>
        )
    }

    const Card=({title,price,image,id})=>{
        return(
            <Pressable onPress={()=>nav.navigate('Producto',{id:id})}>
                <Text>Producto : {title}</Text>
                <Text>Precio : ${price} MXN</Text>
                <Image style={{height:70,width:70}} 
                source={{uri:image}}/>
            </Pressable>
        )

    }

    const LScreen=()=>{
        return(
            <View>
                <FlatList
                data={data}
                renderItem={({item})=><Card 
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}/>}
                keyExtractor={item=>item.id}/>
            </View>
        )
    }

  return (
    <View>
      {load?LScreen():Uscreen()}
    </View>
  )
}

export default Productos