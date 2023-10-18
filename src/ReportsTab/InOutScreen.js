import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Searchbar, Button } from "react-native-paper";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { MaterialIcons } from "@expo/vector-icons";

import { MapStyle } from "../../components/theme/map-style";
import { theme } from "../../components/theme/index";
import { ScrollView } from "react-native-gesture-handler";

const InOutScreen = () => {
  const [stopwatchStart, setStopwatchStart] = useState(false);

  const route = useRoute();
  const name = route.params.name;
  const address = route.params.address;
  const city = route.params.city;

  return (
    <View style={styles.container}>
      <Searchbar
        icon="search-web"
        style={styles.searchBar}
        placeholder="Where to?"
        placeholderTextColor="#bbc5cd"
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.98381,
          longitude: 23.727539,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        customMapStyle={MapStyle}
      />
      <View style={styles.secContainer}>
        <Text style={styles.companyText}>{name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>{address}</Text>
          <Text style={styles.detailsText}>,</Text>
          <Text style={[styles.detailsText, { marginLeft: 5 }]}>{city}</Text>
        </View>
        <View style={styles.timerContainer}>
          <MaterialIcons
            style={styles.icon}
            name="timer"
            size={50}
            color="black"
          />
          <Stopwatch options={options} start={stopwatchStart} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={[
              styles.button,
              { backgroundColor: "rgba(131, 140, 105, 255)" },
            ]}
            labelStyle={{ fontSize: 18 }}
            mode="contained"
            onPress={() => {
              setStopwatchStart(true);
            }}
          >
            Είσοδος
          </Button>
          <Button
            style={[styles.button, { backgroundColor: "rgba(89, 96, 117, 1)" }]}
            mode="contained"
            labelStyle={{ fontSize: 18 }}
            onPress={() => {
              setStopwatchStart(false);
            }}
          >
            Έξοδος
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    overflow: "scroll",
    zIndex: 999,
  },
  keyboard: {
    flex: 1,
    zIndex: 999,
  },
  icon: { marginLeft: 40 },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    backgroundColor: "white",
    height: 120,
    width: 220,
    position: "absolute",
    bottom: 130,
    marginLeft: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
  },
  button: {
    width: 170,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsText: {
    fontSize: 13,
    color: `${theme.colors.ui.lightPrimary}`,
    marginLeft: 20,
  },
  detailsContainer: {
    flexDirection: "row",
  },
  companyText: {
    fontSize: 20,
    marginLeft: 20,
  },
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  searchBar: {
    position: "absolute",
    top: 30,
    width: 370,
    zIndex: 999,
  },
  secContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    zIndex: 999,
    backgroundColor: "white",
    padding: 10,
  },
});

const options = {
  container: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    color: "black",
    marginLeft: -40,
  },
};

export default InOutScreen;
