import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <div class="flex-container">
        <div class="text-center">
          <h1>
            <span class="fade-in" id="digit1">
              4
            </span>
            <span class="fade-in" id="digit2">
              0
            </span>
            <span class="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 class="fadeIn">PAGE NOT FOUND</h3>
          <Link to="/">
            <button type="button" name="button">
              Return To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
