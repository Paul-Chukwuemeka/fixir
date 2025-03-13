import { Text, View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated_drip from './animated_drip';
import { useNavigation, Link } from 'expo-router';
import Material from 'react-native-vector-icons/MaterialIcons';
import React, { useState, useRef } from 'react';

const verification = () => {
  const navigate = useNavigation();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);

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
            <Material name="keyboard-arrow-left" size={22} color="#0056D2" />
          </Pressable>
          <Text className=" text-center text-[35px] font-bold text-white">Fixxir</Text>
          <Text className=" px-4 text-center font-[Montserrat-Regular] text-[15px] text-white">
            Your trusted repair and tech partner is just a tap away.
          </Text>
        </View>
        <View className="h-[55%] w-full bg-white p-4 px-6">
          <Text className="font-[Montserrat-SemiBold] text-[34px] text-[#37474F]">
            Verification
          </Text>
          <Text className=" text-[17px] font-[400] text-[#37474F]">
            We've sent some 4 digit code to you
          </Text>
          <View className="px-12">
            <View className="mt-8 flex-row justify-center gap-4">
              {otp.map((item, index) => {
                return (
                  <TextInput
                    key={index}
                    className=" h-16 w-16 rounded-lg bg-[#ECECEC] text-center text-lg"
                    keyboardType="number-pad"
                    maxLength={1}></TextInput>
                );
              })}
            </View>
            <Text className="p-5 text-center font-[Montserrat-Regular] text-[12px] text-[#5C6672]">
              1:20 min left
            </Text>
            <Pressable className=" flex h-fit  w-full rounded-lg  bg-[#0056D2]">
              <Link
                href={'/profile_setup'}
                className="flex w-full items-center justify-center p-5 text-center">
                <Text className="text-lg font-bold text-white ">Continue</Text>
              </Link>
            </Pressable>
          </View>

          <Text className='text-xl text-center p-8'>
            Didn't recieve any code?{' '}
            <Link href={'/verification'} className="text-[#0056D2]">
              Resend
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default verification;
