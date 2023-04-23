import { Link } from "react-router-dom";
import User from "./User";

function Header(props) {
  return (
    <header className="header">
      <div className="header__layout">
        <h1 className="header__title">
          <Link to="/" className="a a_header-title">
            Awesome Kanban Board
          </Link>
        </h1>
        <User userMenuData={props.userMenuData} />
      </div>
    </header>
  );
}

export default Header;
