import { NavLink } from "react-router-dom";
import { IRecord } from "../lib/interfaces";

const GalleryNavigation = ({ galleries }: IRecord) => {
  console.log(galleries);

  return (
    <NavLink
      to={"/"}
      style={({ isActive, isPending, isTransitioning }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "black",
          viewTransitionName: isTransitioning ? "slide" : "",
        };
      }}
    ></NavLink>
  );
};

export default GalleryNavigation;
