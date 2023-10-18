import { Card } from "react-native-paper";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../theme";

export const ReportCard = styled(Card)`
background-color: ${theme.colors.ui.safeArea}
padding: 10px
border-radius: 0px
`;

export const ReportCardTextContainer = styled.View``;

export const MainText = styled.Text`
  font-size: 15px;
`;

export const TextsContainer = styled.View`
  width: 350px;
`;

export const SecTextContainer = styled.View`
  flex-direction: row;
`;

export const SecondaryText = styled.Text`
  color: ${theme.colors.ui.lightPrimary};
`;

export const ArrowContainer = styled.View`
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const MainContainer = styled.View`
  flex-direction: row;
`;

export const Arrow = styled(MaterialIcons).attrs({
  color: `${theme.colors.ui.greenButton}`,
  size: 34,
  name: "arrow-forward-ios",
})`
  margin-right: 15px;
  margin-left: 50px;
`;
