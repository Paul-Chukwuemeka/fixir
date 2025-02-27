import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Animated_drip from './animated_drip';

const welcome = () => {
  return (
    <SafeAreaView className="flex flex-1  items-center justify-between bg-white">
      <Animated_drip />
      <View className="pt-16">
        <Text className=" text-center font-[Montserrat-ExtraBold] text-[40px] text-white">
          Fyxit
        </Text>
        <Text className=" font-[Montserrat-Light ] text-center text-[16px] text-white">
          Your Device deserves the best
        </Text>
      </View>
      <View className="h-1/2 w-screen bg-white px-6 py-0">
        <Text className="font-[Montserrat-ExtraBold] text-[34px]">Welcome!</Text>
        <Text className=" font-[Montserrat-Light ] text-[18px]">Let's get you connected!</Text>
        <View className="mt-8 flex w-full items-center gap-[14px] ">
          <Pressable className="flex h-[50px] w-4/5 items-center justify-center rounded-lg  bg-[#0056D2]">
            <Text>Login</Text>
          </Pressable>
          <Pressable className="flex  h-[50px] w-4/5 items-center justify-center rounded-lg border border-[#0056D2]">
            <Text>Sign Up</Text>
          </Pressable>
          <Text>Or continue with</Text>
          <View>
            <Pressable></Pressable>
            <Pressable></Pressable>
            <Pressable></Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default welcome;
