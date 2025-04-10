import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "../../../utils/utils";

export const RoundButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.lightGrayColor};
  padding: 10px;
  gap: 10px;
  border-radius: 80px;
  cursor: pointer;
  h3 {
    font-weight: ${fontWeights.regular};
    font-size: ${fontSizes.small};
    color: ${colors.blackColor};
  }
`;
