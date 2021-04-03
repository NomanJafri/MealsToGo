import React from "react";
import { Platrform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platrform.os === "android";

const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      {isAndroid ? (
        <CompactWebview source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
