import React from 'react';
import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDispatch } from 'react-redux';
import { getURL } from './actions/getURL';

export const Item = (props) => {

  const img = props.img;

  const dispatch = useDispatch();

  const combineFunctions = () => {
    props.onClick();
    (() => dispatch(getURL(img)))()
  }

  return (
    <TouchableWithoutFeedback onPress={() => combineFunctions()} >
      <View style={{backgroundColor: 'lightgrey', width: 100, height: 150 ,margin: 5}}>
        <Image source={{uri: `${props.img}`}} style={{width: 100, height: 100}}/>
        <Text style={{color: 'black', fontSize: 9}}> {props.alt_description} </Text>
      </View>
    </TouchableWithoutFeedback>
  )
};