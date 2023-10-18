import { Button, Card } from "react-native-paper";
import styled from "styled-components";

import { theme } from "../theme";

export const ButtonContainer = styled(Card.Actions)`
  flex-direction: row;
  margin-left: -15px;
  margin-top: 20px;
`;
export const NewButton = styled(Button).attrs({
  textColor: "white",
  mode: "text",
  labelStyle: { fontSize: 10, lineHeight: 13 },
  marginLeft: 10,
})`
  background-color: rgba(131, 140, 105, 255);
  border-radius: 4px;
  height: 30px;
  width: 110px;
`;
export const EnterExitButton = styled(Button).attrs({
  textColor: "white",
  mode: "text",
  labelStyle: { flexShrink: 1, fontSize: 10, lineHeight: 13 },
  marginLeft: 10,
})`
  height: 30px;
  width: 110px;
  margin-right: 10px;
  background-color: rgba(89, 96, 117, 1);
  border-radius: 4px;
`;

export const CompanyCard = styled(Card).attrs({
  mode: "contained",
})`
  background-color: white;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
`;
export const ImageContainer = styled.View``;
export const ImageCover = styled(Card.Cover)`
  height: 100px;
  width: 100px;
  margin: 20px 10px;
`;
export const DetailsContainer = styled.View`
  margin-top: 10px;
`;
export const MainText = styled.Text`
  font-size: 15px;
  margin: 5px 0px;
`;
export const SecText = styled.Text`
  font-size: 13px;
  color: ${theme.colors.ui.lightPrimary};
`;
export const TextContainer = styled.View``;

export const MainContainer = styled.View`
  flex-direction: row;
`;
