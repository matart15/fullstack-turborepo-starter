import { Button, Text, View } from "react-native";

import { useState } from "react";

export default function Index() {
  
  const [count, setCount] = useState(0);
  return (
    // https://reactnavigation.org/docs/header-buttons#header-interaction-with-its-screen-component
    <>
     
      <Text>Count: {count}</Text>
      <Button
              onPress={() => setCount((c) => c + 1)}
              title="Update count2"
            />
    </>
  );
}