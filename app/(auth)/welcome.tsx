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
      <View className="h-1/2 w-screen bg-white p-6">
        <Text className="font-[Montserrat-ExtraBold] text-[34px]">Welcome!</Text>
        <Text className=" font-[Montserrat-Light ] text-[18px]">Let's get you connected!</Text>
        <View className="flex jusifr ">
          <Pressable>
            <Text className="w-3/4 border">Login</Text>
          </Pressable>
          <Pressable>
            <Text>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default welcome;
