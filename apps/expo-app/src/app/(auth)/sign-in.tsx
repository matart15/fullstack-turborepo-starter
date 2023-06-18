import { Button, Text, View } from "react-native";
import { useAuth } from "../../context/auth";
import React, { useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { Input } from "react-native-elements";
import { Redirect } from "expo-router";

export default function SignIn() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth();
  if(!auth){
    return <Redirect href="/sign-in" />;
  }
  const { signIn, signUp } = auth

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" onPress={() => signIn({email, password})} />
      </View>
      <View style={styles.verticallySpaced}>
        <Button title="Sign up" onPress={() => signUp({email, password})} />
      </View>
    </View>
  )
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => signIn()}>Sign In 11</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})