import styled from "styled-components";
import { Button } from "react-native-paper";
import { theme } from "../theme";

export const ProfileContainer = styled.View`
  flex-direction: column
  align-items: center;
  margin-top: 120px;
  flex: 1;
`;

export const SecText = styled.Text`
  color: ${theme.colors.ui.lightPrimary};
  font-size: 20px;
`;
export const UserText = styled.Text`
  font-size: 25px;
  color: ${theme.colors.ui.darkPrimary};
`;

export const Text = styled.Text`
  font-size: 20px;
  color: black;
  margin-top: 30px
  max-width: 200px
  text-align: center;
`;

export const BackButton = styled(Button).attrs({
  mode: "contained",
  labelStyle: { fontSize: 20 },
})`
  position: absolute;
  bottom: 20px;
  width: 370px;
  height: 50px;
  border-radius: 30px;
  background-color: ${theme.colors.ui.darkPrimary};
  justify-content: center;
`;
