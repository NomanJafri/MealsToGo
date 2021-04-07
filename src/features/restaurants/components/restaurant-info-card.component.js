import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";

import {
  Info,
  Rating,
  Section,
  SectionEnd,
  RestaurantCard,
  RestauranCardCover,
  Address,
  Icon,
} from "./restaurant-info-card.styles";

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name,
    icon,
    photos,
    vicinity,
    isOpenNow,
    rating,
    isClosedTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard>
        <Favourite restaurant={restaurant} />
        <RestauranCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`star-${placeId}-${i}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">Closed Temporarily</Text>
              )}
              <Spacer position="left" size="large" />
              {isOpenNow ? <SvgXml xml={open} width={20} height={20} /> : null}
              <Spacer position="left" size="large" />
              <Icon source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <Address>{vicinity}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
}
