import React, { useContext } from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { Search } from "../components/search.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
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

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <StyledSafeAreaView>
      <Search />

      {isLoading ? <Loading /> : error ? <Error>{error}</Error> : null}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </StyledSafeAreaView>
  );
};

export default RestaurantsScreen;
