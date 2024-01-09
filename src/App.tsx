import GalleryNavigation from "./components/gallery-navigation";
import havardArt from "./data/havardArt";

function App() {
  return (
    <div>
      <GalleryNavigation galleries={havardArt.records} />
    </div>
  );
}

export default App;
