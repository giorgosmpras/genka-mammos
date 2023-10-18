import styled from "styled-components";
import { Button } from "react-native-paper";
import { theme } from "../theme";

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: column
  align-items: center;
  background-color: black;
`;
export const ButtonContainer = styled.View`
  position: absolute;
  background-color: white;
  bottom: 0px;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export const NewTaskButton = styled(Button).attrs({
  mode: "contained",
  labelStyle: { fontSize: 20 },
})`
  height: 50px;
  width: 370px;
  border-radius: 5px;
  background-color: ${theme.colors.ui.darkPrimary};
  justify-content: center;
`;
