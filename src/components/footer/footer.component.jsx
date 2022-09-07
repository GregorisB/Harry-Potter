import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Footer = () => {
   let { house } = useParams();
   return (
      <div>
         {house}
         <Outlet />
      </div>
   );
};

export default Footer;
