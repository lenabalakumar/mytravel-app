import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Formik } from "formik";

const LoginScreen = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View
          style={StyleSheet.flatten([
            styles.loginScreen,
            {
              width: width,
              height: height,
            },
          ])}
        >
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
            <TextInput
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              placeholder="Enter your name"
              style={[styles.textInput, { width: width - 20, height: 50 }]}
            />
            <Button onPress={handleSubmit} title="submit" />
          </KeyboardAvoidingView>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#00ffa6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    letterSpacing: 2,
  },
});
