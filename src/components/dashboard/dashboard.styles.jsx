import styled from "styled-components";
import { colors, fontWeights, fontSizes } from "../../utils/utils";

export const DashboardContainer = styled.div`
  font-family: "General Sans", sans-serif;
  display: flex;
  aside {
    width: 20%;
    background-color: ${colors.deepBlackColor};
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    overflow-y: auto;
  }
  main {
    width: 80%;
    margin-left: 20%;
  }

  .dashboardcontent {
    background-color: ${colors.lightGrayColor};
    height: 100vh;
    padding: 18px 32px;
    overflow-y: scroll;
  }

  .dashboardcontent::-webkit-scrollbar {
    display: none;
  }

  .contentheader {
    h1 {
      font-weight: ${fontWeights.bold};
      font-size: ${fontSizes.extralarge};
      color: ${colors.blackColor};
    }
    p {
      font-weight: ${fontWeights.regular};
      font-size: ${fontSizes.medium};
      color: #333333;
    }
  }

  .cardcontainer {
    margin-top: 20px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 20px;
  }

  @media screen and (max-width: 992px) {
    aside {
      display: none;
    }
    main {
      width: 100%;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 540px) {
    .cardcontainer {
      grid-template-columns: 49% 49%;
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 414px) {
    .cardcontainer {
      grid-template-columns: 98%;
      margin-right: 0px;
    }
  }
`;
