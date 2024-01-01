import "./App.css";
import GalleryNavigation from "./components/gallery-navigation";
import havardArt from "./data/havardArt";
import { IRecord } from "./lib/interfaces";

const fixGalleries: IRecord = havardArt.records;

function App() {
  return (
    <>
      <h1>Art Museum</h1>
      <GalleryNavigation galleries={fixGalleries} />
    </>
  );
}

export default App;
