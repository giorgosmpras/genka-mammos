import React from "react";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { EventCardComponent } from "../../components/HomeTab/event-card.component";

import { theme } from "../../components/theme";
import eventData from "../../components/HomeTab/event-data";

const EventList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Title = styled.Text`
  padding-vertical: 8px
  color: ${theme.colors.ui.darkPrimary};
`;

const HomeScreen = () => {
  return (
    <SafeArea>
      <Title style={{ marginLeft: 15 }}>επερχόμενα γεγονότα</Title>

      <EventList
        data={eventData}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item }) => (
          <EventCardComponent
            mainText={item.mainText}
            id={item.id}
            day={item.day}
            secText={item.secText}
            category={item.category}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};
export default HomeScreen;
