import * as React from 'react';
import {FlatList, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, paddingVertical: 10}}>
      <View
        style={{
          marginHorizontal: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#CECECE',
        }}>
        <Text style={{paddingVertical: 15}}>{}</Text>
      </View>
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
                // navigation.navigate('OpenSessionScreen');
              } else if (item.value === 'logout') {
                // signOut();
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
