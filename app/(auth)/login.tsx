import { Text, View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated_drip from './animated_drip';
import { Link, useNavigation } from 'expo-router';
import Material from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';




const Login = () => {
  const navigate = useNavigation()
  const [showPassword, setShowPassword] = useState(true)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}

    >
      <SafeAreaView className='flex-1 justify-between bg-white' >
        <Animated_drip />
        <View className="pt-8 w-full  px-6  ">
          <Pressable className='bg-white w-12  rounded-lg justify-center py-3 items-center '
            onPress={() => { navigate.goBack() }}
          >
            <Material name='keyboard-arrow-left' size={20} color='#0056D2' />
          </Pressable>
          <Text className=" text-center font-bold text-[35px] text-white">
            Fixxir
          </Text>
          <Text className=" font-[Montserrat-Light ] text-center text-[15px] text-white">
            Your Device deserves the best.
          </Text>
        </View>
        <View className="h-[58%] w-screen bg-white px-8 py-0">
          <Text className="font-[Montserrat-Bold] text-[34px]">Login</Text>
          <Text className=" font-[Montserrat-Regular] text-[#16242b] text-[18px]">Let's get you connected.</Text>
          <View className='items-center justify-center w-full'>
            <View className='w-full px-4'>
            <View className='p-4 w-full'>
              <Text className='font-[Montserrat-SemiBold] text-lg'>Email</Text>
              <View className='flex-row border-b border-[#0f1c22a8]  items-center'>
                <TextInput className='w-11/12 font-[Montserrat-SemiBold] px-2' placeholder='Your Email' />
                <Material name='email' size={25} color='#9ca3af' />
              </View>
            </View>
            <View className='w-full p-4'>
              <Text className='font-[Montserrat-SemiBold] text-lg'>Password</Text>
              <View className='flex-row border-b border-[#0f1c22a8] items-center'>
                <TextInput className='w-11/12 px-2 font-[Montserrat-SemiBold]'
                  secureTextEntry={showPassword}
                  placeholder='Your Password' />
                <Material name={showPassword ? 'visibility-off' : 'visibility'} size={25} color='#9ca3af'
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
              <Text className='text-right text-[#0056D2] font-[Montserrat-SemiBold] p-2'>Forgot password?</Text>
              <Pressable className='text-center bg-[#0056D2] rounded-lg'>
                <Text className='w-full p-5 text-center flex justify-center items-center text-xl text-white font-[Montserrat-Bold]'>Login</Text>
              </Pressable>
              <Text className='text-center p-4 font-normal text-xl'> New to Fixxir? <Link href='/sign_up'><Text className='text-[#0056D2] font-normal'>Sign up</Text></Link></Text>
            </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );

}

export default Login;
