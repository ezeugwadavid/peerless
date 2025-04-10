import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "../../utils/utils";

export const HeaderContainer = styled.header`
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  padding: 18px 32px;
  position: sticky;
  top: 0;
  z-index: 100;
  .desktopcont {
    display: block;
  }
  .mobilecont {
    display: none;
  }
  .desktopheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rightcontent {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .search {
    display: flex;
    align-items: center;
    width: 20%;
    margin-right: 20px;
  }

  .searchiconcontainer {
    position: absolute;
  }
  .searchicon {
    position: relative;
    left: 10px;
  }

  .searchinput {
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 10px 10px 10px 40px;
    font-weight: 400;
    font-size: ${fontSizes.regular};
    width: 100%;
    color: ${colors.lightBlackColor};
    outline: none;
  }

  .datesection {
    display: flex;
    gap: 10px;
  }

  .firstdate,
  .seconddate {
    h3 {
      font-weight: ${fontWeights.regular};
      font-size: ${fontSizes.small};
      color: ${colors.blackColor};
    }
  }
  .vrtrule {
    width: 1px;
    height: 20px;
    background-color: #d2d2d2;
  }
  .seconddate {
    h3 {
      font-weight: ${fontWeights.bold};
      font-size: 14px;
      color: ${colors.blackColor};
    }
  }

  .mobileheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 992px) {
    .desktopcont {
      display: none;
    }
    .mobilecont {
      display: block;
    }

    .search {
      width: 50%;
    }

    .searchinput {
      font-size: ${fontSizes.extrasmall};
    }
    .searchicon {
      width: 18px;
      height: 18px;
    }
    .sidebar {
      display: block;
      position: fixed;
      top: 0;
      left: -70%;
      width: 70%;
      background-color: ${colors.deepBlackColor} !important;
      height: 100vh;
      transition: left 0.3s ease;
      z-index: 1000;
    }

    .sidebar.open {
      left: 0;
    }
  }
`;
