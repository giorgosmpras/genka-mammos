import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import requestListData from "../../components/ScannerAction/request-list-data";
import { Button, Card } from "react-native-paper";
import { Image } from "react-native";
import CardCover from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

const RequestListScreen = ({ navigation, route }) => {
  //const { name } = route.params;
  //navigation.setOptions("top-tabs", { headerTitle: "test2" })
  return (
    <>
      <View style={{ backgroundColor: "#d1d3de", flex: 1 }}>
        <FlatList
          data={requestListData}
          renderItem={({ item }) => (
            <Card
              mode="contained"
              style={{ backgroundColor: "#d1d3de" }}
              onPress={() => navigation.navigate("success")}
            >
              <View style={styles.card}>
                <View style={styles.iconContainer}>
                  <FontAwesome5 name={item.icon} size={45} color="white" />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.problem}</Text>
                </View>
              </View>
            </Card>
          )}
          keyExtractor={(item) => item.id}
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate("SelectRequest")}
          style={styles.button}
          labelStyle={{ fontSize: 18 }}
        >
          Ακύρωση
        </Button>
      </View>
    </>
  );
};

export default RequestListScreen;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    marginBottom: 30,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "rgba(89, 96, 117, 1)",
    height: 100,
    width: 100,
  },
  textContainer: {
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(89, 96, 117, 1)",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 50,
  },
});
