import ComicViewer from "react-comic-viewer";
import captain from "../assets/capain-america.png";
import deadpool from "../assets/dead-pool.png";



function ComicReader() {

  return (
    <div>

      <ComicViewer
        className={"w-10"}
        direction="ltr"
        pages={[captain, deadpool,deadpool]}
      />
    </div>
  );
}
export default ComicReader;
