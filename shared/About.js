import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Icon} from 'native-base';
import {colors, gs} from '../shared/styles';
const hotel = {
  name: 'HaHa Hotel',
  price: '$ 968',
  location: 'New York',
  about:
    'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator and other kitchen facilities, upholstered chairs, a flat screen television, and en-suite bathrooms',
};
export default function About() {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>{hotel.name}</Text>
      <Text style={styles.info}>
        {hotel.price} &#8226; {hotel.location}
      </Text>
      <View style={gs.divider} />
      <Text style={gs.sectionTitle}>About {hotel.name}</Text>
      <Text style={styles.about}>{hotel.about}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: colors.darkBg,
  },
  info: {
    color: colors.textSec,
    fontWeight: '600',
    marginTop: 4,
  },
  about: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSec,
    marginTop: 6,
    lineHeight: 20,
  },
});
