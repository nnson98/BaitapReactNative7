import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, gs} from '../shared/styles';
import {Icon} from 'native-base';
export default function Amenities() {
  return (
    <View style={gs.sectionContainer}>
      <Text style={gs.sectionTitle}>Amenities</Text>
      <View style={styles.amenitiesContainer}>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Icon
              type="Feather"
              name="wifi"
              style={[gs.icon, {color: colors.lightHl}]}
            />
          </View>
          <Text style={styles.amenityName}>WI-FI</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Icon
              type="Ionicons"
              name="md-restaurant"
              style={[gs.icon, {color: colors.lightHl}]}
            />
          </View>
          <Text style={styles.amenityName}>Hotel Restaurant</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Icon
              type="FontAwesome5"
              name="swimmer"
              style={[gs.icon, {color: colors.lightHl}]}
            />
          </View>
          <Text style={styles.amenityName}>Swimming Pools</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Icon
              type="Entypo"
              name="drink"
              style={[gs.icon, {color: colors.lightHl}]}
            />
          </View>
          <Text style={styles.amenityName}>Bar</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Icon
              type="Ionicons"
              name="ios-car"
              style={[gs.icon, {color: colors.lightHl}]}
            />
          </View>
          <Text style={styles.amenityName}>Parnking Spot</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Icon
              type="Feather"
              name="speaker"
              style={[gs.icon, {color: colors.lightHl}]}
            />
          </View>
          <Text style={styles.amenityName}>Night Club</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    ...gs.rowBetween,
    flexWrap: 'wrap',
  },
  amenityContainer: {
    alignItems: 'center',
    width: 95,
    marginVertical: 12,
  },
  amenity: {
    width: 48,
    height: 48,
    borderRadius: 24,
    ...gs.center,
    backgroundColor: '#444',
  },
  amenityName: {
    color: colors.lightHl,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
});
