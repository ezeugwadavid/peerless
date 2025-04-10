import { LoaderContainer } from "./loader.styles";
import LoaderImage from "../../assets/loader.gif";

const Loader = () => (
  <LoaderContainer>
    <img src={LoaderImage} alt="" />
  </LoaderContainer>
);

export default Loader;
