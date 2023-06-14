import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navigation-bar">
          <div className="navigation-logo">Flipkart</div>
          <div className="navigation-search">
            <input type="search" />
          </div>
          <div className="navigation-login">
            <a href="r#">
              <div>
                <a href="2#">Login</a>
              </div>
            </a>
          </div>
          <div className="navigation-more">
            More
          </div>
          <div className="navigation-cart">
            Cart
          </div>
        </div>
      </div>
    </>
  );
}
