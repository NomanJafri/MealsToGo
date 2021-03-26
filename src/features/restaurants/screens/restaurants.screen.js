import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const StyledSearchView = styled.View`
  padding: ${(props) => props.theme.space[3]}};
  background-color:  ${(props) => props.theme.colors.bg.secondary}};
`;

const StyledListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]}};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantsScreen = () => (
  <StyledSafeAreaView>
    <StyledSearchView>
      <Searchbar placeholder="Search" onChangeText={null} value={null} />
    </StyledSearchView>
    <StyledListView>
      <RestaurantInfoCard />
    </StyledListView>
  </StyledSafeAreaView>
);

export default RestaurantsScreen;
