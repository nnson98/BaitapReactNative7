import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from '../shared/styles';
import Header from '../shared/Header';
import Bookmark from '../shared/Bookmark';
import About from '../shared/About';
import Stats from '../shared/Stats';
import Amenities from '../shared/Amenities';
import Address from '../shared/Address';
import Extras from '../shared/Extras';
import {ScrollView} from 'react-native-gesture-handler';
export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <Header />
        <View>
          <Bookmark />
          <About />
          <Stats />
          <Amenities />
          <Address />
          <Extras />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
