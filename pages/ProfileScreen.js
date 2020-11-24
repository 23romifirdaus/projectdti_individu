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

const styles = StyleSheet.create({
  container: {
  flex: 1,
  paddingTop: 22
  },
  item: {
  padding: 10,
  fontSize: 18,
  height: 44,
  },
  icon: {
  alignSelf: "center",
  marginTop: 20,
  }
});

const ProfileScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
      style={{
        flex: 2,
        backgroundColor: "#4982C1",
      }}
      >
        <View
        style={{
          flex: 2,
        }}
        >
          <Image style={styles.icon} source={require('../img/foto.png')}/> 
        </View>
        <View
        style={{
          flex: 1,
        }}
        >
        <Text style={[{ color: "white", textAlign: "center", fontSize: 20 }]}>Romi Firdaus Lazuardi </Text>
        <Text style={[{ color: "white", textAlign: "center", fontSize: 20 }]}>085213827514</Text>
        </View>
      </View>
      <View
      style={{
        flex:3,
      }}
      >      
        <View style={[{ width: "90%", margin: 10 , marginTop: 40, marginLeft: 18}]}>
          <Button
            onPress={() => navigation.navigate('Registrasi')}
            title="Ubah Profile"
          />
        </View>

        <View style={[{ width: "90%", margin: 10 , marginTop: 10, marginLeft: 18, backgroundColor: "red" }]}>
          <Button style={[{ height: 40}]}
            onPress={() => navigation.navigate('Registrasi')}
            title="Ganti Password"
          />
        </View>

        <View style={[{ width: "90%", margin: 10 , marginTop: 10, marginLeft: 18, backgroundColor: "red" }]}>
          <Button
            onPress={() => navigation.navigate('Login')}
            title="Logout"
          />
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;