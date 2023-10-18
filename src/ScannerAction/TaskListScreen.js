import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from "react-native-paper";

const TaskListScreen = ({ navigation }) => {
  // navigation.setOptions(" SelectTopTabs", { screen: "Λίστα εργασιών", {headerTitle: "test2"} });
  const [checkboxState, setCheckboxState] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: "center",
          fontWeight: "400",
          fontSize: 24,
          marginTop: 40,
        }}
      >
        Ανοιχτά Γραφεία Ισογείου
      </Text>
      <Text
        style={{
          alignSelf: "center",
          fontWeight: "200",
          fontSize: 14,
          marginTop: 20,
        }}
      >
        Λεωφόρος Βουλιαγμένης 566-568
      </Text>
      <Text
        style={{
          alignSelf: "center",
          fontWeight: "200",
          fontSize: 14,
          marginTop: 5,
        }}
      >
        Αργυρούπολη
      </Text>
      <View
        style={{
          borderBottomColor: "#8b95b3",
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: 250,
          alignSelf: "center",
          marginTop: 30,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginHorizontal: 20,
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.title}>
            Καθαρίζουμε τις επιφάνειες των γραφείων
          </Text>
        </View>
        <BouncyCheckbox
          onPress={() => setCheckboxState(!checkboxState)}
          size={25}
          fillColor="blue"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#898888" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginHorizontal: 20,
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.title}>
            Αδειάζουμε τα καλαθάκια και βάζουμε νέα σακούλα (30x25)
          </Text>
        </View>
        <BouncyCheckbox
          onPress={() => setCheckboxState(!checkboxState)}
          size={25}
          fillColor="blue"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#898888" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginHorizontal: 20,
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.title}>Τζάμια κάθε 2 μέρα</Text>
        </View>
        <BouncyCheckbox
          onPress={() => setCheckboxState(!checkboxState)}
          size={25}
          fillColor="blue"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#898888" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginHorizontal: 20,
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.title}>Σκούπισμα / Σφουγγάρισμα</Text>
        </View>
        <BouncyCheckbox
          onPress={() => setCheckboxState(!checkboxState)}
          size={25}
          fillColor="blue"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#898888" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginHorizontal: 20,
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.title}>Μαζεύουμε κούπες / ποτήρια κ.τ.λ</Text>
        </View>
        <BouncyCheckbox
          onPress={() => setCheckboxState(!checkboxState)}
          size={25}
          fillColor="blue"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#898888" }}
        />
      </View>

      <Button
        labelStyle={{ fontSize: 18 }}
        style={styles.complete}
        mode="contained"
        onPress={() =>
          navigation.navigate("Αναφορές", { screen: "Νέα αναφορά" })
        }
      >
        Ολοκλήρωση
      </Button>

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
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9eaf1",
  },
  item: {
    backgroundColor: "#e9eaf1",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    alignSelf: "flex-start",
    // marginRight: 30,
    fontSize: 14,
  },
  subTitle: {
    alignSelf: "flex-start",
    // marginRight: 30,
    fontSize: 15,
    color: "#8d8d8d",
  },
  back: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
    marginHorizontal: 15,
    backgroundColor: "rgba(89, 96, 117, 1)",
  },
  complete: {
    marginTop: 40,
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
    marginHorizontal: 15,
    backgroundColor: "rgba(87, 126, 95, 1)",
  },
});
