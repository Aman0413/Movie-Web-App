import React from "react";
import "./Footer.scss";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="Footer">
      <div>Moviezz</div>
      <div>©{date} | Made by Aman</div>
    </div>
  );
}

export default Footer;
