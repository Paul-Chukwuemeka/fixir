import { Redirect } from 'expo-router';

import '../global.css';

export default function App() {
  const auth = false;

  if (auth) {
    return <Redirect href="/(tabs)/home" />;
  }
  return <Redirect href="/(auth)/welcome" />;
}
