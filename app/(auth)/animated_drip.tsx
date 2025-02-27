import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withSpring,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const DripAnimation = () => {
  const translateY = useSharedValue(-100);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withDelay(1000, withTiming(300, { duration: 1500 })),
        withSpring(250, { damping: 5, stiffness: 100 })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container} className="top-[-345px]">
      <Animated.Image
        source={require('../../assets/images/dripping 2.png')}
        style={[styles.drip, animatedStyle]}
        className="w-screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  drip: {
    resizeMode: 'contain',
  },
});

export default DripAnimation;
