import { Stack } from 'expo-router';

const layout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="sign_up" options={{ headerShown: false }} />
      <Stack.Screen name="verification" options={{ headerShown: false }} /> 
      <Stack.Screen name="profile_setup" options={{ headerShown: false }} /> 
    </Stack>
  );
};

export default layout;
