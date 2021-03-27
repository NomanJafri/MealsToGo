import React from "react";
import styled from "styled-components/native";

export const Spacer = ({ position = "top", size = "small" }) => {
  const SizesAvailable = {
    small: 1,
    medium: 2,
    large: 3,
  };

  const PositionsAvailable = {
    top: "margin-top",
    left: "margin-left",
    right: "margin-right",
    bottom: "margin-bottom",
  };

  const Spaced = styled.View`
    ${PositionsAvailable[position]}: ${(props) =>
      props.theme.space[SizesAvailable[size]]};
  `;

  return <Spaced />;
};
