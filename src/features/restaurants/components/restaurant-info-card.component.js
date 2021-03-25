import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  font-size: 28px;
  color: red;
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
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Title>{name}</Title>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16, fontSize: 20 },
});
