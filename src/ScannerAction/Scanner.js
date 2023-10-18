import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Button } from "react-native-paper";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Scanner = ({ navigation, route }) => {
  /*const id = route.params.id;
    const company = route.params.company;
    const address = route.params.address;
    const city = route.params.city;*/

  navigation.setOptions({ headerShown: false });
  const [hasPermission, setHasPermission] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    navigation.navigate(
      "SelectRequest" /*, {
      id: id,
      name: company,
      address: address,
      city: city,
      type: type,
      data: data,
    }*/
    );
  };

  if (hasPermission === null) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" style={{ alignSelf: "center" }} />
      </View>
    );
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      {isFocused && (
        <View style={{ flex: 1 }}>
          <Camera
            onBarCodeScanned={handleBarCodeScanned}
            style={[StyleSheet.absoluteFillObject, styles.camera]}
            ratio={"16:9"}
          />
          <View style={styles.iconContainer}>
            <AntDesign
              name="close"
              size={34}
              color="white"
              style={styles.returnIcon}
              onPress={() => navigation.navigate("Αναφορές")}
            />
            <Ionicons
              name="flash-outline"
              size={32}
              color="white"
              style={styles.flashIcon}
              onPress={() => navigation.navigate("SelectRequest")}
            />
          </View>
          <View style={styles.centerContainer}>
            <View style={styles.lineView} />
            <FontAwesome5
              name="qrcode"
              size={200}
              color="white"
              style={styles.barcode}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 90,
  },
  returnIcon: {
    marginLeft: 20,
    marginTop: 10,
  },
  againButton: {
    marginTop: 10,
    backgroundColor: "white",
    marginLeft: 70,
    borderRadius: 10,
  },
  flashIcon: {
    marginLeft: 20,
    marginTop: 10,
    position: "absolute",
    right: 20,
  },
  centerContainer: {
    alignItems: "center",
    marginTop: 140,
  },
  lineView: {
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    width: 270,
    opacity: 0.4,
    position: "absolute",
    bottom: 132,
  },
  barcode: {
    marginTop: 50,
    opacity: 0.4,
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 2,
    paddingHorizontal: 45,
    paddingVertical: 25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
