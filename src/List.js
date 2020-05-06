import React from 'react';
import { View, Text, Image } from "react-native";
import { Item } from "./Item";
import { useFetch } from './useFetch';
import { useSelector } from 'react-redux';

const API = 'https://api.unsplash.com/photos/?client_id=ct-Vx5X8qwFdDdFfjz6SPLflHa3KYjNwFwYYQru7_sI';

export const List = ({navigation}) => {

  useFetch(API);

  const state = useSelector(state => state.rootReducer);
  
  const viewPhoto = () => {
    navigation.navigate('Photo');
  };

  return (
    <View style={{flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center'}}>
      {
         state.map((e,i) => {
          return (
            <Item
              key={i}
              img={e.urls.regular}
              onClick={viewPhoto}
              alt_description={e.alt_description}
            />
          )
        })
      }
    </View>
  )
};