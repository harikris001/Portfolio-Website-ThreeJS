import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta-text">
      <p>
        Want to collaborate on a project <br className="sm:block hidden" />
        Let's build it together
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
