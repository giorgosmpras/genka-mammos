import { Text, StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React, { Component, useState } from "react";
import CalendarStrip from "react-native-calendar-strip";
import { theme } from "../../components/theme";
import "moment";
import "moment/locale/el";
import { Greek } from "../../components/TaskTab/TaskScreenCalendar";
import Data from "../../components/TaskTab/TaskScreenData";
import BouncyCheckbox from "react-native-bouncy-checkbox";
//import RadioButton from "radio-buttons-react-native";

function TasksScreen() {
  const [visible, setVisible] = useState();
  const [RadioId, setRadioId] = useState();
  const [checkboxState, setCheckboxState] = React.useState(false);

  const Item = ({ id, title, description }) => (
    <View style={styles.item}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{description}</Text>
        </View>
        {RadioId == id && (
          <BouncyCheckbox
            isChecked={true}
            size={25}
            fillColor="blue"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#898888" }}
          />
        )}
        {RadioId != id && (
          <BouncyCheckbox
            isChecked={false}
            size={25}
            fillColor="blue"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#898888" }}
          />
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <CalendarStrip
          locale={{ name: "el", config: Greek }}
          calendarAnimation={{ type: "sequence", duration: 30 }}
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          style={{
            height: 100,
            paddingTop: 5,
            paddingBottom: 10,
            marginBottom: 15,
          }}
          calendarHeaderStyle={{ color: "white" }}
          calendarColor={theme.colors.ui.darkPrimary}
          dateNumberStyle={{ color: "white" }}
          dateNameStyle={{ color: "white" }}
          highlightDateNumberStyle={{ color: "white" }}
          highlightDateNameStyle={{ color: "white" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
        />
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              description={item.description}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default TasksScreen;

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
    fontSize: 15,
  },
  subTitle: {
    alignSelf: "flex-start",
    // marginRight: 30,
    fontSize: 13,
    color: "#8d8d8d",
  },
});
/*{RadioId == id && (
                    <RadioButton
                        animation={"bounceIn"}
                        isSelected={true}
                        onPress={() => doSomething(id)}
                    />
                )}

                {RadioId != id && (
                    <RadioButton
                        animation={"bounceIn"}
                        isSelected={false}
                        onPress={() => doSomething(id)}
                    />
                )}*/

/*<CalendarStrip
    locale={{ name: "fr", config: Greek }}
    calendarAnimation={{ type: "sequence", duration: 30 }}
    daySelectionAnimation={{
        type: "border",
        duration: 200,
        borderWidth: 1,
        borderHighlightColor: "white",
    }}
    style={{
        height: 100,
        paddingTop: 5,
        paddingBottom: 10,
        marginBottom: 15,
    }}
    calendarHeaderStyle={{ color: "white" }}
    calendarColor={theme.colors.ui.darkPrimary}
    dateNumberStyle={{ color: "white" }}
    dateNameStyle={{ color: "white" }}
    highlightDateNumberStyle={{ color: "white" }}
    highlightDateNameStyle={{ color: "white" }}
    disabledDateNameStyle={{ color: "grey" }}
    disabledDateNumberStyle={{ color: "grey" }}
/>*/
