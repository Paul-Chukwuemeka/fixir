import { Text, View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated_drip from './animated_drip';
import { Link, useNavigation } from 'expo-router';
import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';

const SignUp = () => {
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
          <Text className=" font-[Montserrat-Light ] text-center text-[15px] text-white">
            Your Device deserves the best.
          </Text>
        </View>
        <View className="h-[58%] w-screen bg-white px-8 py-0">
          <Text className="font-[Montserrat-SemiBold] text-[34px] text-[#37474F]">Sign up</Text>
          <Text className=" font-[Montserrat-SemiBold] text-lg text-[#37474F]">
            Join thousands of device owners.
          </Text>
          <View className="w-full  p-4 px-4">
            <View className="flex-row items-center justify-between">
              <Pressable
                className="w-1/2 text-center"
                onPress={() => {
                  setAuthMethod('phone');
                }}>
                <Text
                  className={` ${authMethod != 'phone' && 'text-[#8A8D91]'} text-center text-lg font-semibold`}>
                  Phone
                </Text>
              </Pressable>
              <Pressable
                className="w-1/2 text-center"
                onPress={() => {
                  setAuthMethod('email');
                }}>
                <Text
                  className={` ${authMethod == 'phone' && 'text-[#8A8D91]'} text-center text-lg font-semibold`}>
                  Email
                </Text>
              </Pressable>
            </View>
            <View className="h-1.5 w-full rounded-lg bg-[#F1F1F1]">
              <View
                className={`h-full w-1/2 rounded-lg bg-[#0056D2] ${authMethod != 'phone' && 'translate-x-[100%]'}`}></View>
            </View>
            <Text className="pt-6 text-lg font-normal text-[#37474F]">
              {authMethod == 'phone' ? 'Phone Number' : 'Email Address'}
            </Text>
            <View className="flex-row items-center gap-2 border-b p-2 px-4">
              <Feather
                name={authMethod == 'phone' ? 'phone' : 'mail'}
                color={'#37474F'}
                size={25}
              />
              <TextInput
                className="w-11/12"
                placeholder={authMethod == 'phone' ? '(+234)' : 'Email'}
              />
            </View>
            <Pressable className="flex h-fit w-full  my-6 rounded-lg  bg-[#0056D2]">
            <Link href={'/verification'} className='w-full p-5 text-center flex justify-center items-center'>
              <Text className='font-bold text-white '>Continue</Text>
            </Link>
          </Pressable>

            <Text className="p-4 text-center text-xl font-normal">
              Joined us before? 
              <Link href="/login">
                <Text className="font-normal text-[#0056D2]"> Log In</Text>
              </Link>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
