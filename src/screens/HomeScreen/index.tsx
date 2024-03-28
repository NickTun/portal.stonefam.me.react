import * as React from 'react';
import {FlatList, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 15,
    }}>
      <FlatList
        data={[
          {key: 'Открыть рабочую смену', value: 'session'},
          {key: 'Выйти', value: 'logout'},
          // {key: 'Рабочие смены за период', value: 'report'},
        ]}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              if (item.value === 'session') {
                navigation.navigate('OpenSessionScreen');
              } else if (item.value === 'logout') {
                signOut();
              } else {
                // navigation.navigate('SessionsReportScreen');
              }
            }}
            style={{padding: 15}}>
            <Text>{item.key}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default HomeScreen;
