import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div class="header_i">
        <h1 className="logo">
          <a href="">logo</a>
        </h1>
        <ul className="nav">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/subpage">서브1</Link>
          </li>
          <li>
            <Link>서브2</Link>
          </li>
          <li>
            <Link>서브3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
