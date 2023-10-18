import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { theme } from "../../components/theme";
import { ReportCardComponent } from "../../components/HomeTab/report-card.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import styled from "styled-components";
import { Button } from "react-native-paper";
import reportData from "../../components/HomeTab/report-data";

export const ButtonContainer = styled.View`
  position: absolute;
  background-color: white;
  bottom: 0px;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export const NewReportButton = styled(Button).attrs({
  mode: "contained",
  labelStyle: { fontSize: 20, fontWeight: "thin" },
})`
  height: 50px;
  width: 370px;
  border-radius: 5px;
  background-color: ${theme.colors.ui.darkPrimary};
  justify-content: center;
`;

const HomeReportsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <FlatList
        data={reportData}
        renderItem={({ item }) => (
          <ReportCardComponent
            company={item.company}
            location={item.location}
            problem={item.problem}
            date={item.date}
            time={item.time}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <ButtonContainer>
        <NewReportButton onPress={() => navigation.navigate("Νεα Αναφορά")}>
          Νέα Αναφορά
        </NewReportButton>
      </ButtonContainer>
    </SafeArea>
  );
};

export default HomeReportsScreen;
