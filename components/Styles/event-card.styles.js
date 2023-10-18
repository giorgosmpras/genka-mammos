import { Button, Card } from "react-native-paper";
import styled from "styled-components";
import { theme } from "../theme/index";

export const EventCard = styled(Card)`
  background-color: ${theme.colors.ui.white};
  padding: 10px 15px;
  border-radius: 2px;
`;

export const EventCardTextContainer = styled.View`
  flex-direction: row;
`;

export const EventCardTexts = styled(Card.Content)`
  border-style: solid;
  border-left-width: 1px;
  border-color: ${theme.colors.ui.safeArea};
`;

export const EventCardDate = styled(Card.Content)`
  justify-content: center;
`;

export const TitleEvent = styled.Text`
  font-size: 15px;
  padding-right:40px
  
`;

export const SecondTextContainer = styled.View`
  flex-direction: row;
  padding-bottom: 30px;
`;

export const SubText = styled.Text`
  color: ${theme.colors.ui.safeArea};
  margin-top:10px;
  font-size: 13px;
`;

export const ViewButton = styled(Button).attrs({
  textColor: `${theme.colors.ui.white}`,
  mode: "contained-tonal",
})`
  background-color: rgba(131, 140, 105, 255);
  color: ${theme.colors.ui.white};
  border-radius: 4px;
`;

export const IgnoreButton = styled(Button)`
  background-color: rgba(89, 96, 117, 1);
  border-radius: 4px;
`;
