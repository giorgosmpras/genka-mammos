import styled from "styled-components";
import { StatusBar, SafeAreaView } from "react-native";

import { theme } from "../theme";

export const SafeArea = styled(SafeAreaView)`
  flex: 1
  background-color: ${theme.colors.ui.safeArea};
`;
