import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const RequestListSuccess = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <AntDesign
          name="checkcircle"
          size={100}
          color="rgba(131, 140, 105, 255)"
          style={styles.icon}
        />
        <Text style={styles.text}>Η αναφορά έγινε με επιτυχία!</Text>
      </View>
      <Button
        labelStyle={{ fontSize: 18 }}
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Νεα Αναφορά", {})}
      >
        Νέα Αναφορά
      </Button>
    </>
  );
};

export default RequestListSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  icon: {
    alignSelf: "center",
    marginBottom: 30,
  },
  button: {
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
    marginHorizontal: 15,
    backgroundColor: "rgba(89, 96, 117, 1)",
    marginBottom: 20,
  },
});
