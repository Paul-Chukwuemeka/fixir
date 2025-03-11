import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated_drip from './animated_drip';


export class login extends Component {
  render() {
    return (
      <SafeAreaView className="flex flex-1  items-center justify-between bg-white">
        <Animated_drip />
      <View className="pt-16">
        <Text className=" text-center font-bold text-[35px] text-white">
          Fyxit
        </Text>
        <Text className=" font-[Montserrat-Light ] text-center text-[15px] text-white">
          Your Device deserves the best.
        </Text>
      </View>
      </SafeAreaView>
    );
  }
}

export default login;
