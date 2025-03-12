import { Text, View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated_drip from './animated_drip';
import { useNavigation } from 'expo-router';
import Material from 'react-native-vector-icons/MaterialIcons';
import React, { useState, useRef } from 'react';

const verification = () => {
  const navigate = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

interface HandleChange {
    (text: string, index: number): void;
}

interface HandleBackspace {
    (text: string, index: number): void;
}

const handleChange: HandleChange = (text, index) => {
    if (text.length > 1) return; // Prevent more than one digit

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus(); // Move to next input
    }
};

const handleBackspace: HandleBackspace = (text, index) => {
    if (!text && index > 0) {
        inputRefs.current[index - 1]?.focus(); // Move to previous input
    }
};
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
        <View className="flex-row justify-center space-x-2">
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              handleBackspace(digit, index);
            }
          }}
          keyboardType="number-pad"
          maxLength={1}
          className="w-12 h-12 text-center text-lg border border-gray-400 rounded"
        />
      ))}
    </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default verification;
