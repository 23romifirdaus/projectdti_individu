// In App.js in a new project

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  FlatList, 
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import RegistrasiScreen from './pages/RegistrasiScreen';
import ProfileScreen from './pages/ProfileScreen';
import TransferHistoriScreen from './pages/TransferHistoriScreen';
import LoginScreen from './pages/LoginScreen';
import TopUpScreen from './pages/TopUpScreen';
import QRPayScreen from './pages/QRPayScreen';
import QRPayConfirmScreen from './pages/QRPayConfirmScreen';
import TransferScreen from './pages/TransferScreen';
import CekNomorScreen from './pages/CekNomorScreen';
import TransferBerhasilScreen from './pages/TransferBerhasilScreen';
import TopUpBerhasilScreen from './pages/TopUpBerhasilScreen';
import PembayaranBerhasilScreen from './pages/PembayaranBerhasilScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const IconBottom = (props) => {
  const { color, focused } = props.data
  let colorSelected = focused ? color : 'grey'
  return (
      <View>
          <Image source={props.image} style={{ width: 40, height: 40, tintColor: colorSelected }} />
      </View>
  )
}

function LoginStack() {
  return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function RegistrasiStack() {
  return (
      <Stack.Navigator
        initialRouteName="Registrasi"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Registrasi"
          component={RegistrasiScreen}
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function TransferHistoriStack() {
  return (
      <Stack.Navigator
        initialRouteName="TransferHistori"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="TransferHistori"
          component={TransferHistoriScreen}
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}/>
      </Stack.Navigator>
  );
}

function TopUpStack() {
  return (
      <Stack.Navigator
        initialRouteName="TopUp"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="TopUp"
          component={TopUpScreen}
          options={{ title: 'TopUp' }}/>
      </Stack.Navigator>
  );
}

function QRPayStack() {
  return (
      <Stack.Navigator
        initialRouteName="QRPay"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="QRPay"
          component={QRPayScreen}
          options={{ title: 'QRPay' }}/>
      </Stack.Navigator>
  );
}

function QRPayConfirmStack() {
  return (
      <Stack.Navigator
        initialRouteName="QRPayConfirm"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="QRPayConfirm"
          component={QRPayConfirmScreen}
          options={{ title: 'QRPayConfirm' }}/>
      </Stack.Navigator>
  );
}

function TransferStack() {
  return (
      <Stack.Navigator
        initialRouteName="Transfer"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={{ title: 'Transfer' }}/>
      </Stack.Navigator>
  );
}

function CekNomorStack() {
  return (
      <Stack.Navigator
        initialRouteName="CekNomor"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="CekNomor"
          component={CekNomorScreen}
          options={{ title: 'CekNomor' }}/>
      </Stack.Navigator>
  );
}

function TransferBerhasilStack() {
  return (
      <Stack.Navigator
        initialRouteName="TransferBerhasil"
        screenOptions={{
          headerStyle: { backgroundColor: '#005690' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="TransferBerhasil"
          component={TransferBerhasilScreen}
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function TopUpBerhasilStack() {
  return (
      <Stack.Navigator
        initialRouteName="TopUpBerhasil"
        
      >
        <Stack.Screen
          name="TopUpBerhasil"
          options={{headerShown: false}}
          component={TopUpBerhasilScreen}
          />
      </Stack.Navigator>
  );
}

function PembayaranBerhasilStack() {
  return (
      <Stack.Navigator
        initialRouteName="PembayaranBerhasil"
        
      >
        <Stack.Screen
          name="PembayaranBerhasil"
          options={{headerShown: false}}
          component={PembayaranBerhasilScreen}
          />
      </Stack.Navigator>
  );
}

function HomeTabs() {
  return (

    
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#e91e63',
      style: { height: 60 }
  }}
  >
      <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('./img/icon_home.png')} />
                    )
                }}
            />
      <Tab.Screen name="Setting" component={TransferHistoriScreen}
                options={{
                    title: "TransferHistory",
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('./img/icon_historytransfer.png')} />
                    )
                }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    title: "Profile",
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('./img/icon_profile.png')} />
                    )
                }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginStack} options={{headerShown: false}}/>
      <Stack.Screen name="Registrasi" component={RegistrasiScreen} options={{
          title: 'Registrasi Akun',
          headerStyle: {
          backgroundColor: '#005690',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="TopUp" component={TopUpScreen} options={{
          title: 'Top Up',
          headerStyle: {
          backgroundColor: '#005690',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="QRPay" component={QRPayScreen} options={{
          title: 'QR Payment',
          headerStyle: {
          backgroundColor: '#005690',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="QRPayConfirm" component={QRPayConfirmScreen} options={{
          title: 'Konfirmasi Bayar',
          headerStyle: {
          backgroundColor: '#005690',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Transfer" component={TransferScreen} options={{
          title: 'Transfer',
          headerStyle: {
          backgroundColor: '#005690',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="CekNomor" component={CekNomorScreen} options={{
          title: 'Transfer',
          headerStyle: {
          backgroundColor: '#005690',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="TransferBerhasil" component={TransferBerhasilStack} options={{headerShown: false}}/>
        <Stack.Screen name="TopUpBerhasil" component={TopUpBerhasilStack} options={{headerShown: false}}/>
        <Stack.Screen name="PembayaranBerhasil" component={PembayaranBerhasilStack} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;