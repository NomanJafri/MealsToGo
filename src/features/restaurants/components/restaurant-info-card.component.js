import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
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
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard>
        <RestauranCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
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
