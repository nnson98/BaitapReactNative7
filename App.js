import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {colors} from './shared/styles';
import Home from './screens/Home';
import Navigator from './routes/rootStack';
export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
