import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Image, SafeAreaView, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import User from "./user.jpg";

import Home from './Home';
import Producto from './Producto';
import { Login } from './Login';
import Productos from './Productos';

const Stack = createNativeStackNavigator();
const TabsH = createBottomTabNavigator();
const StackP = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Función para el contenido personalizado del drawer
const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#f4f4f4',
          borderBottomWidth: 1,
        }}
      >
        {/* Agrega la imagen aquí */}
        <Image
          source={User}
          style={{
            height: 100,
            width: 100,
            borderRadius: 65,
            marginTop: 30
          }}
        />

        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: 'bold',
            color: '#111',
          }}
        >
          Isabella Joanna
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#111',
          }}
        >
          Product Manager
        </Text>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

// Navegación principal (de login a home)
export const NavHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={MiDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// Navegación secundaria (tabs de home)
export const NavTabsHome = () => {
  return (
    <TabsH.Navigator>
      <TabsH.Screen
        name={'Home2'}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'#321'} />,
        }}
      />
      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='dollar' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

// Navegación de productos a producto detalle
export const StackProductos = () => {
  return (
    <StackP.Navigator>
      <StackP.Screen name='Productos2' component={Productos} options={{ headerShown: false }} />
      <StackP.Screen name='Producto' component={Producto} options={{ headerShown: true }} />
    </StackP.Navigator>
  );
};

export const MiDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,

        },
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerLabelStyle: {
          color: '#111',
        },
      }}
    >
      <Drawer.Screen
        name='Home'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='home' size={30} />,
        }}
        component={NavTabsHome}
      />
    </Drawer.Navigator>
  );
};
