import styled from "styled-components";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

export const TopIconsContainer = styled.View`
  flex-direction: row;
`;

export const QrCode = styled(BarCodeScanner)`
width: 100%;
height: 100%
flex: 1;`;

export const ReturnIcon = styled(AntDesign).attrs({
    name: "close",
    size: 34,
    color: "white",
})`
  margin-left: 20px;
  margin-top: 10px;
`;

export const FlashIcon = styled(Ionicons).attrs({
    name: "flash-outline",
    size: 32,
    color: "white",
})`
  margin-left: 20px;
  margin-top: 10px;
  position: absolute;
  right: 20px;
`;

export const CenterIconsContainer = styled.View`
  align-items: center;
  margin-top: 120px;
  text-decoration: line-through;
  text-decoration
`;

export const BarcodeIcon = styled(FontAwesome5).attrs({
    name: "qrcode",
    size: 200,
    color: "white",
})`
  margin-top: 50px;
  opacity: 0.4;
  border-style: solid;
  border-color: white;
  border-width: 2px;
  padding: 25px 45px;
`;

export const LineView = styled.View`
  border-style: solid;
  border-color: white;
  border-width: 1px;
  width: 270px;
  opacity: 0.4;
  position: absolute;
  bottom: 132px;
`;

export const AgainButton = styled(Button).attrs({
    mode: "contained",
    textColor: "black",
})`
  margin-top: 10px;
  background-color: white;
  margin-left: 70px;
  border-radius: 10px;
`;