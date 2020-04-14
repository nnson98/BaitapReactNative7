import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, gs} from '../shared/styles';
import {Icon} from 'native-base';

export default function Header() {
  return (
    <View>
      <Image
        source={{
          uri:
            'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10030369-cb7b833698050035c11ee6e8dad10a38.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit',
        }}
        style={styles.img}
      />
      <View style={styles.topButtons}>
        <Icon
          type="AntDesign"
          name="close"
          style={[styles.icon, styles.colors, styles.size2]}
        />
        <View style={gs.rowCenter}>
          <Icon
            type="AntDesign"
            name="save"
            style={[styles.icon, styles.topButtonRight, gs.icon]}
          />
          <Icon
            type="AntDesign"
            name="sharealt"
            style={[styles.icon, styles.topButtonRight, gs.icon]}
          />
          <Icon
            type="Entypo"
            name="dots-three-vertical"
            style={[styles.icon, styles.topButtonRight, gs.icon]}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 400,
  },
  icon: {
    color: '#fff',
  },
  size1: {
    fontSize: 18,
  },
  topButtons: {
    ...gs.rowBetween,
    position: 'absolute',
    top: 64,
    left: 32,
    right: 32,
  },
  topButtonRight: {
    marginLeft: 12,
  },
});
