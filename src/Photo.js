import React from 'react';
import { View, Text, Image} from "react-native";
import { useSelector } from 'react-redux';
export const Photo = () => {

  const link = useSelector(state => state.link);

  console.log(link)
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
    <Image source={{uri: `${link}`}} style={{ flexGrow: 1,  width: "100%"}}/>
  </View>
  )
};