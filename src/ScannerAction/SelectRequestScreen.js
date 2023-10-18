import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

function SelectRequestScreen({ navigation, route }) {
  /*const { name, address, city } = route.params;*/
  //navigation.setOptions({ headerTitle: "test" });

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Ανοιχτά Γραφεία Ισογείου</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Λεωφόρο Βουλιαγμένης 566-568</Text>
        <Text style={styles.info}>Αργυροπουλή</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          labelStyle={{ fontSize: 18 }}
          mode="contained"
          onPress={() =>
            navigation.navigate("top-tabs", { screen: "Νέα αναφορά" })
          }
        >
          Νέα Αναφορά
        </Button>
        <Button
          labelStyle={{ fontSize: 18 }}
          style={styles.button}
          mode="contained"
        >
          Ολα εντάξει
        </Button>
        <Button
          labelStyle={{ fontSize: 18 }}
          style={styles.button}
          mode="contained"
        >
          Μη έλεγχος
        </Button>
        <Button
          labelStyle={{ fontSize: 18 }}
          style={styles.button}
          mode="contained"
          onPress={() =>
            navigation.navigate("top-tabs", { screen: "Λίστα εργασιών" })
          }
        >
          Λίστα εργασιών
        </Button>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Button
          labelStyle={{ fontSize: 18 }}
          style={styles.back}
          mode="contained"
          onPress={() =>
            navigation.navigate("Αναφορές", { screen: "Νέα αναφορά" })
          }
        >
          Ακύρωση
        </Button>
      </View>
    </View>
  );
}

export default SelectRequestScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 27,
    marginTop: 50,
    color: "#61647a",
  },
  info: {
    textAlign: "center",
    color: "#8b95b3",
  },
  infoContainer: {
    marginTop: 15,
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: 20,
    width: 200,
    height: 50,
    backgroundColor: "black",
  },
  back: {
    marginTop: 130,
    justifyContent: "center",
    borderRadius: 30,
    height: 50,
    marginHorizontal: 15,
    backgroundColor: "rgba(89, 96, 117, 1)",
  },
});
