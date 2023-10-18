import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

import { SafeArea } from "../../components/utility/safe-area.component";
import machineData from "../../components/InfoTab/data";
import { MachineComponent } from "../../components/InfoTab/machine.component";

const SettingsScreen = () => {
  return (
    <SafeArea>
      <FlatList
        data={machineData}
        renderItem={({ item }) => (
          <MachineComponent
            id={item.id}
            info={item.info}
            date={item.date}
            time={item.time}
          />
        )}
      />
    </SafeArea>
  );
};
export default SettingsScreen;
