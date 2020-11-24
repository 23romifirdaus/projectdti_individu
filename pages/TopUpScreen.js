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

const TopUpScreen = ({ navigation }) => {
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
      <Image style={styles.icon} source={require('../img/dompet.png')}/>
      <TextInput
      placeholder="Nominal Top Up"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20
      }}
      />
      <Button onPress={() => navigation.navigate('TopUpBerhasil')}
      title="SUBMIT"
      />
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

export default TopUpScreen;