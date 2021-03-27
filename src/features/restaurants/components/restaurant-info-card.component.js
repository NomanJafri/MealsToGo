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
    name = "Noman's Cafe",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      "https://picsum.photos/700",
    ],
    address = "100 Happy Happy Avenue, London",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
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
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
}
