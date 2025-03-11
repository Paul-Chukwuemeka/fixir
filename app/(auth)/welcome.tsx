import { Text, View, Pressable, Platform, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated_drip from './animated_drip';

const welcome = () => {
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
      <View className="h-[58%] w-screen bg-white px-6 py-0">
        <Text className="font-[Montserrat-ExtraBold] text-[34px]">Welcome!</Text>
        <Text className=" font-[Montserrat-Light ] text-[18px]">Let's get you connected!</Text>
        <View className="mt-8 flex w-full items-center gap-[14px] ">
          <Pressable className="flex h-fit w-4/5 rounded-lg  bg-[#0056D2]">
            <Link href={'/login'} className='w-full p-5 text-center flex justify-center items-center'>
              <Text className='font-bold text-white '>Login</Text>
            </Link>
          </Pressable>
          <Pressable className="flex  h-fit  w-4/5 rounded-lg border border-[#0056D2]">
            <Link href={'/sign_up'} className='w-full p-5 text-center flex justify-center items-center'>
              <Text className='font-bold text-[#0056D2] '>Sign Up</Text>
            </Link>
          </Pressable>
          <Text className='text-lg'>Or continue with</Text>
          <View className='flex-row w-full justify-center gap-4 items-center'>
            <Pressable className=' border w-fit h-fit p-2 px-8 rounded-lg'>
              <Image source={require('../../assets/images/google-logo.png')} className='w-10 h-10' />
            </Pressable>
            <Pressable className=' border w-fit h-fit p-2 px-8 rounded-lg'>
              <Image source={require('../../assets/images/facebook.png')} className='w-10 h-10' />

            </Pressable >
            {
              Platform.OS === "ios" && (
                <Pressable className=' border w-fit h-fit p-2 px-8 rounded-lg'>
                  <Image source={require('../../assets/images/apple.png')} className='w-10 h-10' />

                </Pressable>
              )
            }
          </View>
        </View>
        <Text className='text-center text-lg mt-4 font-[Montserrat-normal] text-gray-400'>
          By continuing you accept our <Text className='text-[#2187D1] underline'>Terms of Service</Text>.
          Also learn how we process your data in our
          <Text className='text-[#2187D1] underline'> Privacy Policy</Text> and <Text className='text-[#2187D1] underline'>Cookies policy</Text>.
        </Text>
      </View>

    </SafeAreaView>
  );
};

export default welcome;
