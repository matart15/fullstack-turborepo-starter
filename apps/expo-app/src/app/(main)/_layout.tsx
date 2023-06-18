import { Stack } from "expo-router";
import { useAuth } from "../../context/auth";
import { Button, Text, View } from "react-native";

function LogoTitle() {
  return (
    <Text>Logo1</Text>
  );
}
export default function Layout() {
  const { signOut } = useAuth();
  return (
    <Stack
      initialRouteName=""
      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: (props) => <LogoTitle {...props} />,
        headerRight: () => (
          <Button
            onPress={signOut}
            title="SignOut1"
          />
        ),
      }}
    >
      {/* Optionally configure static options outside the route. */}
      <Stack.Screen name="top" options={{}} />
    </Stack>
  );
}