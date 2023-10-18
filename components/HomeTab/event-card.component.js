import React from "react";
import { Text } from "react-native-paper";

import {
  EventCard,
  EventCardTextContainer,
  EventCardTexts,
  EventCardDate,
  TitleEvent,
  SecondTextContainer,
  SubText,
  ViewButton,
  IgnoreButton,
} from "../Styles/event-card.styles";

export const EventCardComponent = ({
  id,
  mainText,
  day,
  secText,
  category,
}) => {
  const getCurrentDate = () => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const d = new Date();
    const month = months[d.getMonth()];
    const day = d.getDay();
    return `${month} ${day}`;
  };

  return (
    <EventCard>
      <EventCardTextContainer>
        <EventCardDate>
          <Text>{getCurrentDate()}</Text>
          <SubText>{day}</SubText>
        </EventCardDate>
        <EventCardTexts>
          <TitleEvent>{mainText}</TitleEvent>
          <SecondTextContainer>
            <SubText>{secText}</SubText>
            <SubText> • </SubText>
            <SubText>{category}</SubText>
          </SecondTextContainer>
        </EventCardTexts>
      </EventCardTextContainer>
      <EventCard.Actions>
        <ViewButton>Προβολή</ViewButton>
        <IgnoreButton>Αγνόησε</IgnoreButton>
      </EventCard.Actions>
    </EventCard>
  );
};
