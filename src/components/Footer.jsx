import React from "react";

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
function Footer() {
  // create date object from local time
  const date = new Date();
  return (
    <footer>
      <p>Copyright ©{date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
