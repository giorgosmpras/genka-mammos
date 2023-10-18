import React from "react";
import { Avatar } from "react-native-paper";

import {
  ProfileContainer,
  SecText,
  UserText,
  Text,
  BackButton,
} from "../../components/Styles/profile.styles";
import { theme } from "../../components/theme/index";

const ProfileScreen = ({ navigation }) => {
  return (
    <ProfileContainer>
      <Avatar.Icon
        size={110}
        icon="account"
        backgroundColor={theme.colors.ui.darkPrimary}
      />
      <UserText>User Name</UserText>

      <SecText>User Email</SecText>

      <Text>Αλλαγή Προσωπικών Στοιχείων</Text>
      <Text>Ειδοποιήσεις</Text>
      <Text>Γλώσσα Εφαρμογής</Text>
      <Text>Αποσύνδεση</Text>
      <BackButton
        onPress={() => {
          navigation.navigate("Aρχική");
        }}
      >
        Κλείσιμο
      </BackButton>
    </ProfileContainer>
  );
};
export default ProfileScreen;
