import {
  Button,
  StyleSheet,
  Text,
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
          <TextInput
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
          />
          <Button onPress={handleSubmit} title="submit" />
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
});
