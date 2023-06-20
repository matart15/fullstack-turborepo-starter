import { useState } from 'react';
import { Button, Text } from 'react-native';

const Index = (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    // https://reactnavigation.org/docs/header-buttons#header-interaction-with-its-screen-component
    <>
      <Text>Count: {count}</Text>
      <Button onPress={(): void => setCount(c => c + 1)} title="Update count2" />
    </>
  );
};
export default Index;
