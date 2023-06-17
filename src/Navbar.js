import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navigation">
          <div></div>
          <div className="navigation-bar">
            <div className="navigation-logo">
              <div className="nav-logo">
                <a href="/">
                  <img
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alt="Flipkart"
                  />
                </a>
                <a href="/">
                  Explore
                  <span>Plus</span>
                  <img
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                    alt="Plus"
                  />
                </a>
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
              <a href="/login">
                <div className="parent-drop-down">
                  <div className="parent-login">
                    <a href="/login">Login</a>
                  </div>
                </div>
              </a>
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
                <a href="/cart">
                  <div className="default-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                  </div>
                </a>
                <div className="pure-div logo-text">
                  <a href="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                  </a>
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
