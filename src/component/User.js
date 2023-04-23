import React from "react";
import imgSrc from "../img/user-avatar.svg";
import { Link } from "react-router-dom";

function User(props) {
  let [clicked, setClicked] = React.useState(true);
  const handlerClick = () => setClicked((clicked = !clicked));

  let style = (clicked && "_closed") || "";

  let UserMenu = (
    <div className={`header__user-menu${style} user-menu`}>
      <ul className="user-menu__ul">
        {props.userMenuData.map((item, index) => (
          <li className="user-menu__li" onClick={item.action} key={index}>
            <Link
              to={(item.href && item.href) || window.location}
              className="a"
              key={index}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className={`header__user${style}`} onClick={handlerClick}>
        <img src={imgSrc} alt="Avatar" />
        {UserMenu}
      </div>
    </>
  );
}

export default User;
