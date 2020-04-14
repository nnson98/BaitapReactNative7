import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Icon} from 'native-base';
import {colors, gs} from '../shared/styles';
export default function Bookmark() {
  return (
    <View style={styles.bookmark}>
      <Icon
        type="Feather"
        name="bookmark"
        style={[gs.icon, {color: colors.pink}]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  bookmark: {
    position: 'absolute',
    width: 56,
    height: 56,
    right: 32,
    top: -56 / 2,
    backgroundColor: colors.text,
    ...gs.center,
    borderRadius: 56 / 2,
    zIndex: 10,
  },
});
