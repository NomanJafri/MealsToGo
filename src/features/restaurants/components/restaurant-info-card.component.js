import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]}};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}};
`;

const RestauranCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]}};
  background-color: ${(props) => props.theme.colors.bg.primary}};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`  
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Noman's Cafe",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "100 Happy Happy Avenue, London",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <RestaurantCard>
        <RestauranCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
}
