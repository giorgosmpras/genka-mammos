import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import { SafeArea } from "../../components/utility/safe-area.component";
import { theme } from "../../components/theme";

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <KeyboardAvoidingView style={styles.keyboard}>
        <SafeArea>
          <ScrollView style={styles.scroll}>
            <View style={styles.firstContainer}>
              <Text style={styles.mamossText}>Ma.Mo.SS</Text>
              <Text style={styles.secText}>
                Malfunction Mobile Scanning System
              </Text>
              <Entypo
                name="bug"
                size={120}
                color="#f28500"
                style={styles.icon}
              />
            </View>
            <View style={styles.secContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Τηλέφωνο*"
                underlineStyle={{ opacity: 0 }}
                placeholderTextColor="#bbc5cd"
                keyboardType="number-pad"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Κωδικός*"
                underlineStyle={{ opacity: 0 }}
                placeholderTextColor="#bbc5cd"
                secureTextEntry={true}
              />
              <Button
                style={styles.button}
                mode="contained"
                labelStyle={{ fontSize: 18 }}
                onPress={() => navigation.navigate("Aρχική")}
              >
                Είσοδος
              </Button>
            </View>
            <View style={styles.thrdContainer}>
              <Text style={styles.btmText}>Powered By GenKan S.A.</Text>
            </View>
          </ScrollView>
        </SafeArea>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scroll: {
    overflow: "scroll",
  },
  keyboard: {
    flex: 1,
  },
  firstContainer: {
    alignItems: "center",
    marginVertical: 60,
  },
  mamossText: {
    fontSize: 40,
    fontFamily: "Anton_400Regular",
  },
  secText: {
    fontSize: 18,
    opacity: 0.6,
  },
  icon: {
    marginTop: 11,
  },
  textInput: {
    marginBottom: 5,
    marginHorizontal: 15,
    height: 55,
  },
  button: {
    borderRadius: 30,
    marginHorizontal: 15,
    marginTop: 10,
    height: 45,
    backgroundColor: `${theme.colors.ui.darkPrimary}`,
    justifyContent: "center",
  },
  thrdContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  btmText: {
    fontSize: 13,
    marginBottom: 50,
    opacity: 0.6,
  },
});
