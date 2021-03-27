import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const StyledSearchView = styled.View`
  padding: ${(props) => props.theme.space[3]}};
  background-color:  ${(props) => props.theme.colors.bg.secondary}};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = () => (
  <StyledSafeAreaView>
    <StyledSearchView>
      <Searchbar placeholder="Search" onChangeText={null} value={null} />
    </StyledSearchView>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </StyledSafeAreaView>
);

export default RestaurantsScreen;
