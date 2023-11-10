import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Logo from '../../assets/images/stonefam.png';

const SplashScreen = () => {
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: 200 * 0.3}]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '40%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SplashScreen;
