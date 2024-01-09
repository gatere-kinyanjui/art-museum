import { NavLink } from "react-router-dom";
import { IRecord } from "../lib/interfaces";

const GalleryNavigation = ({ galleries }: { galleries: IRecord[] }) => {
  console.log(galleries);

  return (
    <nav>
      <h1 className="galleries-title">Galleries</h1>
      <NavLink to={"/"}>Home</NavLink>

      {galleries.map((gallery) => (
        <NavLink
          to={`/gallery/${gallery.id}`}
          key={gallery.id} // Assuming id is unique for each gallery
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          {gallery.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default GalleryNavigation;
