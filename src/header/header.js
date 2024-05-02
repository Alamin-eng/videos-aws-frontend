// import gif from '../../public/video-drama.gif';
import gif from "../assets/video-drama.gif";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-img">
        <img className="header-gif" src={gif} alt="animated gif" />
      </div>
      <div>
      <h1>Vidoes library</h1>
      </div>
      <div className="header-search">
        <div className="search">search</div>
      </div>
      <div className="header-addbuttons">add buttons</div>
      <div>users</div>
    </div>
  );
}
