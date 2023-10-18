import React from "react";
import { View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import map from "../../assets/map.png";

import { MapStyle } from "../../components/theme/map-style";
import { CompanyCardComponent } from "../../components/ReportsTab/company-card.component";
import reportsData from "../../components/ReportsTab/reports-data";
import { theme } from "../../components/theme";
import { ImageBackground } from "react-native";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const ReportsContainer = styled.View`
position: absolute
  bottom: 20px
  width: 95%;
  height: 50%;
`;
const MainContainer = styled.View`
  align-items: center;
`;

const SearchContainer = styled.View`
  
  position: absolute
  z-index: 999
  top: 10px
  width: 100%
`;

const ReportsScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <Searchbar
        icon="search-web"
        placeholder="Αναζήτηση Τοποθεσίας"
        inputStyle={{
          textAlign: "center",
          color: theme.colors.ui.lightPrimary,
        }}
      />
      <Map
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.98381,
          longitude: 23.727539,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={MapStyle}
      />
      <ReportsContainer style={{ flex: 1 }}>
        <FlatList
          data={reportsData}
          renderItem={({ item }) => (
            <CompanyCardComponent
              id={item.id}
              company={item.company}
              address={item.address}
              city={item.city}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
          style={{ marginBottom: 35 }}
        />
      </ReportsContainer>
    </MainContainer>
  );
};
export default ReportsScreen;
/*<Map
        initialRegion={{
          latitude: 37.98381,
          longitude: 23.727539,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

        customMapStyle={MapStyle}
      />*/
//provider={PROVIDER_GOOGLE}
