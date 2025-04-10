import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "../../../utils/utils";

export const CardContainer = styled.section`
  border-radius: 8px;
  background-color: ${colors.whiteColor};
  border: 1px solid ${colors.whiteColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  img {
    width: 48px;
    height: 48px;
  }
  &:hover {
    background-color: ${colors.lightRedColor};
    border: 1px solid ${colors.redColor};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  article {
    h3 {
      font-weight: ${fontWeights.bold};
      font-size: ${fontSizes.large};
      color: ${colors.blackColor};
    }
    p {
      font-weight: ${fontWeights.regular};
      font-size: ${fontSizes.medium};
      color: #606060;
    }
  }
`;
