import React from "react";
import { CalendarList } from "react-native-calendars";

import {
  MainContainer,
  ButtonContainer,
  NewTaskButton,
} from "../../components/Styles/home-calendar.styles";

const CalendarScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <CalendarList
        monthFormat={"MMMM"}
        theme={{
          calendarBackground: "#d1d3de",
        }}
      />
      <ButtonContainer>
        <NewTaskButton
          onPress={() => {
            navigation.navigate("Νεα Αναφορά");
          }}
        >
          Νέα Εργασία
        </NewTaskButton>
      </ButtonContainer>
    </MainContainer>
  );
};
export default CalendarScreen;
