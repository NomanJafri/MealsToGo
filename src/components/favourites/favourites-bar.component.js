import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, ScrollView } from "react-native";
import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const StylesHorizontalView = styled.View`
  margin-left: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Text>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <StylesHorizontalView key={key}>
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </StylesHorizontalView>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
