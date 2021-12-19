import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="footer__section__container__footer__links">
      <h1>Quick Links</h1>
      <div className="footer__section__container__footer__links--quick">
        <Link to="/">About</Link>
        <Link to="/">Support</Link>
        <Link to="/">COntact</Link>
      </div>
    </div>
  );
};

export default Links;
