import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View } from 'react-native';

const Details = (): JSX.Element | null => {
  const router = useRouter();
  const params = useLocalSearchParams();
  if (params.name === undefined) {
    router.replace('/');
    return null;
  }
  if (Array.isArray(params.name)) {
    router.replace('/');
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <Text
        onPress={(): void => {
          router.setParams({ name: 'Updated' });
        }}>
        Update the title
      </Text>
    </View>
  );
};

export default Details;
