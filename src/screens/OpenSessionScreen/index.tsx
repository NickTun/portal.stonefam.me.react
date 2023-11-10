import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Button,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const OpenSessionScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [store, setStore] = useState('2');
  const [stores, setStores] = useState([]);
  const [comment, setComment] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const getStores = async () => {
      try {
        const response = await fetch('https://portal.stonefam.me/api/stores', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + props.token,
          },
        });
        const json = await response.json();
        // console.warn(json);
        setStores(json.data);
      } catch (error) {
        // console.warn(error);
      } finally {
        setLoading(false);
      }
    };

    getStores();
  }, []);

  return (
    <View style={{padding: 15}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Picker selectedValue={store} onValueChange={setStore}>
          {stores.map(store => {
            return (
              <Picker.Item key={store.id} value={store.id} label={store.name} />
            );
          })}
        </Picker>
      )}

      <Text>Комментарий</Text>
      <TextInput
        value={comment}
        onChangeText={setComment}
        style={{marginVertical: 12, padding: 15, backgroundColor: '#ececec'}}
      />
      <Button
        title="Открыть смену"
        onPress={() => {
          fetch('https://portal.stonestore.me/api/stores', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + props.token,
            },
            body: JSON.stringify({
              user_id: props.userId,
              store_id: store,
              comment: comment,
            }),
          })
            .then(function (response) {
              navigation.goBack();
              Alert.alert('Открытие смены', 'Смена открыта успешно');
              // console.warn(`Смена открыта: ${store}, ${comment}`);
              // console.log('It worked, response is: ', response);
            })
            .catch(function () {
              // console.log('error');
            });
        }}
      />
    </View>
  );
};

export default OpenSessionScreen;
