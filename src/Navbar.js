import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import LoginLogout from "./LoginLogout";

export default function Navbar({setloginState}) {
  return (
    <>
      <div className="navbar">
        <div className="navigation">
          <div></div>
          <div className="navigation-bar">
            <div className="navigation-logo">
              <div className="nav-logo">
                <Link to="/">
                  <img
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alt="Flipkart"
                  />
                </Link>
                <Link to="/">
                  Explore
                  <span>Plus</span>
                  <img
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                    alt="Plus"
                  />
                </Link>
              </div>
            </div>
            <div className="navigation-search">
              <Searchbar />
            </div>
            <div className="navigation-login">
              <LoginLogout setloginState={setloginState}/>
            </div>
            <div className="navigation-more">
              <div className="pure-div">
                <div className="type-more">
                  <span>More</span>
                </div>
              </div>
            </div>
            <div className="navigation-cart">
              <div className="pure-div">
                <Link to="/cart">
                  <div className="default-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                  </div>
                </Link>
                <div className="pure-div logo-text">
                  <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
