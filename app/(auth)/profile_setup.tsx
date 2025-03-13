import { Text, View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated_drip from './animated_drip';
import Material from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, Link } from 'expo-router';
import { useState } from 'react';

const Profile_setup = () => {
  const navigate = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

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
            Complete Profile
          </Text>
          <Text className=" text-lg font-[400] text-[#37474F]">Let's Complete your setup.</Text>
          <View className="w-full p-5 px-10 gap-2 items-center">
            <View className="border-b">
              <Text className="text-[#121212]">Name</Text>
              <View className="flex-row items-center">
                <TextInput placeholder="Enter your full name" className=" w-11/12 px-4" />
                <Material name="email" size={25} color="#959498" />
              </View>
            </View>
            <View className="border-b">
              <Text className="text-[#121212]">Password</Text>
              <View className="flex-row items-center">
                <TextInput placeholder="Your password" className=" w-11/12 px-4" />
                <Feather name={showPassword ? 'eye' : 'eye-off'} size={25} color="#959498" />
              </View>
            </View>
            <View className="border-b">
              <Text className="text-[#121212]">Confirm password</Text>
              <View className="flex-row items-center">
                <TextInput placeholder="Your password" className=" w-11/12 px-4" />
                <Feather name={showPassword ? 'eye' : 'eye-off'} size={25} color="#959498" />
              </View>
            </View>
            <Pressable className='text-center mt-6 w-11/12 bg-[#0056D2] rounded-lg'>
                <Text className='w-full p-5 text-center flex justify-center items-center text-xl text-white font-[Montserrat-Bold]'>Login</Text>
              </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Profile_setup;
