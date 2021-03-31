import React, { useContext } from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, FlatList, Text } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

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

const Loading = styled(ActivityIndicator).attrs({
  size: "50px",
  animating: true,
  color: "powderblue",
})`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;

const Error = styled.Text`
  font-size: 50px;
  position: absolute;
  top: 50%;
  margin-left: 25%;
`;

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <StyledSafeAreaView>
      <StyledSearchView>
        <Searchbar placeholder="Search" onChangeText={null} value={null} />
      </StyledSearchView>
      {isLoading ? <Loading /> : error ? <Error>{error}</Error> : null}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </StyledSafeAreaView>
  );
};

export default RestaurantsScreen;
