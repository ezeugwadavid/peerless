import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { fontSizes, colors, fontWeights } from "../../utils/utils";
export const SidebarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  .logosection {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #393939;
    align-items: center;
    margin-bottom: 10px;
    padding: 20px 0;
    align-items: center;

    img {
      padding-left: 20px;
    }

    button {
      display: none;
    }
  }

  .nav {
    padding: 20px 20px;
  }

  .bottomsection {
    padding: 20px 20px;
  }
  .navitem {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 12px;
    color: ${colors.whiteColor};
    font-weight: ${fontWeights.semibold};
    font-size: ${fontSizes.small};
    margin-bottom: 10px;
  }

  @media screen and (max-width: 992px) {
    background-color: ${colors.deepBlackColor};
    .nav {
      padding: 20px 40px;
    }

    .logosection {
      button {
        border: 1px solid ${colors.whiteColor};
        color: ${colors.blackColor};
        background-color: ${colors.whiteColor};
        padding: 5px;
        display: block;
        margin-right: 10px;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none !important;

  &.navitem {
    display: flex !important;
    gap: 10px !important;
    align-items: center !important;
    padding: 12px !important;
    color: ${colors.whiteColor} !important;
    font-weight: ${fontWeights.semibold} !important;
    font-size: ${fontSizes.small} !important;
    margin-bottom: 10px !important;
  }

  &.active-link {
    display: flex !important;
    gap: 10px;
    align-items: center;
    padding: 12px;
    color: ${colors.whiteColor};
    border-radius: 8px;
    background-color: ${colors.redColor};
    font-weight: ${fontWeights.semibold};
    font-size: ${fontSizes.small};
  }

  @media screen and (max-width: 992px) {
    &.navitem {
      width: 100%;
      align-items: center;
      font-size: ${fontSizes.extrasmall};
    }

    &.active-link {
      width: 100%;
      font-size: ${fontSizes.extrasmall};
    }
  }
`;
