import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="oh hello there"
        onPress={() => navigation.navigate('Tabs')}
      />
    </View>
  );
}
export default SignInScreen;