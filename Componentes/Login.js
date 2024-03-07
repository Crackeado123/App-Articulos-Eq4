import {View,Text,Button,TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { estilos } from './Estilos';


export const Login=()=>{
  const nav=useNavigation();
    return(
      <View style={estilos.container}>
        <Text>Username...</Text>
        <TextInput placeholder='Username' autoComplete='off' inputMode='numeric'/>
        <Text>Password...</Text>
        <TextInput placeholder='Password' cursorColor={'red'} keyboardType='numeric' secureTextEntry={true} />
        <Button title='Login' onPress={()=>nav.navigate('Home')} />
        <Button title='Cancel'/>
      </View>
    )
  }