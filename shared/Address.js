import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors, gs} from '../shared/styles';
import {Icon} from 'native-base';
export default function Address() {
  return (
    <View>
      <View style={{backgroundColor: '#000'}}>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRi6V4sJo5gQ90sTi5qd2FxxkHeFwFag5gECQu2s9QgwzzuSkoR&usqp=CAU',
          }}
          style={styles.img1}
        />
      </View>
      <View style={styles.addressContainer}>
        <Image
          source={{
            uri:
              'https://png.pngtree.com/png-vector/20190423/ourlarge/pngtree-location-icon-vector-illustration-in-flat-style-for-any-purpose-png-image_975478.jpg',
          }}
          style={styles.img2}
        />
        <View style={{marginLeft: 8, marginTop: 24}}>
          <Text style={gs.sectionTitle}>Address</Text>
          <Text style={styles.address}>
            {'1529 Taylor Street, New York NY\n10010,Untited State '}
          </Text>
          <View style={{marginTop: 16}}>
            <TouchableOpacity style={styles.checkButton}>
              <Text>Check it</Text>
              <Icon type="Entypo" name="chevron-right" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  img1: {
    height: 200,
    opacity: 0.2,
  },
  img2: {
    width: 64,
    height: 64,
  },
  addressContainer: {
    ...gs.absoluteFull,
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  address: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 20,
  },
  icon: {
    color: '#fff',
    marginLeft: 4,
  },
  checkButton: {
    ...gs.button,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
});
