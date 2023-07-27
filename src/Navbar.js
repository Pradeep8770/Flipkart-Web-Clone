import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
              <div className="search-bar">
                <div className="parent-input">
                  <input
                    type="text"
                    placeholder="Search for product, brands and more"
                  />
                </div>
                <div className="fa-icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
            <div className="navigation-login">
              <Link to="/login">
                <div className="parent-drop-down">
                  <div className="parent-login">
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </Link>
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
