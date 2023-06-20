import { Stack } from 'expo-router';
import { Button, Text } from 'react-native';

import { useAuth } from '../../context/auth';

const LogoTitle = (): JSX.Element => {
  return <Text>Logo1</Text>;
};

const Layout = (): JSX.Element => {
  const { signOut } = useAuth();
  return (
    <Stack
      initialRouteName=""
      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: props => <LogoTitle {...props} />,
        headerRight: () => <Button onPress={signOut} title="SignOut1" />,
      }}>
      {/* Optionally configure static options outside the route. */}
      <Stack.Screen name="top" options={{}} />
    </Stack>
  );
};

export default Layout;
