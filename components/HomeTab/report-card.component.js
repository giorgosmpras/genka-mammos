import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

import {
  MainText,
  ReportCard,
  ReportCardTextContainer,
  TextsContainer,
  SecTextContainer,
  SecondaryText,
  ArrowContainer,
  MainContainer,
} from "../Styles/report-card.styles";
import { theme } from "../theme";

export const ReportCardComponent = ({
  id,
  company,
  location,
  problem,
  date,
  time,
}) => {
  const details = company + ", " + location + " - " + problem;
  return (
    <ReportCard>
      <MainContainer>
        <ReportCardTextContainer>
          <TextsContainer>
            <View>
              <MainText>{details}</MainText>
            </View>
            <SecTextContainer>
              <SecondaryText>{date}</SecondaryText>
              <SecondaryText>{time}</SecondaryText>
            </SecTextContainer>
          </TextsContainer>
        </ReportCardTextContainer>
        <ArrowContainer>
          <MaterialIcons
            color={theme.colors.ui.greenButton}
            size={34}
            name="arrow-forward-ios"
          />
        </ArrowContainer>
      </MainContainer>
    </ReportCard>
  );
};
