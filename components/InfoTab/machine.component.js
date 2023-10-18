import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../theme/index";

export const MachineComponent = ({ id, info, date, time }) => {
  return (
    <Card style={styles.Card}>
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.mainText}>{info}</Text>
          <View>
            <View style={styles.secContainer}>
              <Text style={styles.secText}>{date}</Text>
              <Text style={styles.secText}>{time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.arrowContainer}>
          <MaterialIcons
            style={styles.arrow}
            name="arrow-forward-ios"
            color={theme.colors.ui.greenButton}
            size={34}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  Card: {
    borderRadius: 0,
    backgroundColor: `${theme.colors.ui.safeArea}`,
  },
  mainContainer: {
    paddingHorizontal: 18,
    paddingVertical: 30,
    flexDirection: "row",
  },
  mainText: {
    fontSize: 15,
  },
  secContainer: {
    flexDirection: "row",
  },
  secText: {
    color: `${theme.colors.ui.lightPrimary}`,
  },
  arrowContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  arrow: {
    marginRight: 15,
    marginLeft: 50
  },
});
