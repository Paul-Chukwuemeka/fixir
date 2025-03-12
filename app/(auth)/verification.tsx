import { Text, View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated_drip from './animated_drip';
import { useNavigation } from 'expo-router';
import Material from 'react-native-vector-icons/MaterialIcons';
import React, { useState, useRef } from 'react';

const verification = () => {
  const navigate = useNavigation();
  const [otp,setOtp] = useState<string[]>(["", "", "", ""])
  
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
            <Material name="keyboard-arrow-left" size={25} color="#0056D2" />
          </Pressable>
          <Text className=" text-center text-[35px] font-bold text-white">Fixxir</Text>
          <Text className=" px-4 text-center font-[Montserrat-Regular] text-[15px] text-white">
            Your trusted repair and tech partner is just a tap away.
          </Text>
        </View>
        <View className='w-full px-6 p-4 h-[55%]'>
        <Text className="font-[Montserrat-SemiBold] text-[34px] text-[#101820]">Verification</Text>
        <Text className=' font-[400] text-[17px] text-[#101820]'>We've sent some 4 digit code to you</Text>
        <View>
            {otp.map((item,index)=>{
                return(
                    <TextInput key={index} className='p-4 border'>

                    </TextInput>
                )
            })}
        </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default verification;
