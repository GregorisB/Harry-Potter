import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Footer = () => {
   let { house } = useParams();
   return (
      <div>
         footer
      </div>
   );
};

export default Footer;
