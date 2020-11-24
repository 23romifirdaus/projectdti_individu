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
});

const TransferHistoriScreen = ({ navigation }) => {
  return (
      <ScrollView style={styles.container}>
          <View style={{flex:1,margin:20,backgroundColor:'white'}}>
          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>

          <Text style={{fontSize:16,marginTop:20,marginLeft:70}}>Rp100.000              20/08/2020</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 085213827514</Text>
          </View>
        </ScrollView>
  );
}

export default TransferHistoriScreen;