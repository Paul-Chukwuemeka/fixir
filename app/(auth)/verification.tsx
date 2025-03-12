import { Text, View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated_drip from './animated_drip';
import { Link, useNavigation } from 'expo-router';
import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';

const verification = () => {
    const navigate = useNavigation();
    const [authMethod, setAuthMethod] = useState('phone');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 justify-between bg-white">
        <Animated_drip />
        <View className="w-full px-6  pt-4  ">
          <Pressable
            className="w-12 items-center  justify-center rounded-lg bg-white py-3 "
            onPress={() => {
              navigate.goBack();
            }}>
            <Material name="keyboard-arrow-left" size={20} color="#0056D2" />
          </Pressable>
          <Text className=" text-center text-[35px] font-bold text-white">Fixxir</Text>
          <Text className=" font-[Montserrat-Regular] px-4 text-center text-[15px] text-white">
          Your trusted repair and tech partner is just a tap away.
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default verification