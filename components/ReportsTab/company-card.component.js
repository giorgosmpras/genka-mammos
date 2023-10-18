import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import {
  CompanyCard,
  MainContainer,
  ImageContainer,
  ImageCover,
  DetailsContainer,
  TextContainer,
  MainText,
  SecText,
  ButtonContainer,
  NewButton,
  EnterExitButton,
} from "../Styles/company-card.style";

export const CompanyCardComponent = ({ company, address, city, id, image }) => {
  const navigation = useNavigation();
  return (
    <CompanyCard>
      <MainContainer>
        <ImageContainer>
          <ImageCover key={company} source={{ uri: image }} />
        </ImageContainer>
        <DetailsContainer>
          <TextContainer>
            <MainText>{company}</MainText>
            <SecText>{address}</SecText>
            <SecText>{city}</SecText>
          </TextContainer>
          <ButtonContainer>
            <NewButton
              onPress={() =>
                navigation.navigate(
                  "Νεα Αναφορά" /*{
                  id: id,
                  company: company,
                  address: address,
                  city: city,
                }*/
                )
              }
            >
              Νέα Αναφορά
            </NewButton>
            <EnterExitButton
              onPress={() =>
                navigation.navigate("In_out", {
                  name: company,
                  address: address,
                  city: city,
                })
              }
            >
              Είσοδος/ Έξοδος
            </EnterExitButton>
          </ButtonContainer>
        </DetailsContainer>
      </MainContainer>
    </CompanyCard>
  );
};
