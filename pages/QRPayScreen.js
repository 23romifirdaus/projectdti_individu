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
import { TouchableHighlight } from 'react-native-gesture-handler';

const QRPayScreen = ({ navigation }) => {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: 'white'
    }}
    >
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'white'
      }}
    >
    </View>
    <View
      style={{
        flex: 3,
        marginHorizontal: 8,
        backgroundColor: 'white'
      }}
    >
      <View style={[{ width: "98%", height: 300, marginLeft: 4, backgroundColor: "#C4C4C4", justifyContent: 'center', alignItems: "center" }]}>
        <TouchableHighlight onPress={() => navigation.navigate('QRPayConfirm')}>    
          <Image style={styles.icon} source={require('../img/icon_qr.png')}/>
        </TouchableHighlight> 
        </View>
      </View>
    </View>
  );
}

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
  alignSelf: "center"
  },
});

export default QRPayScreen;