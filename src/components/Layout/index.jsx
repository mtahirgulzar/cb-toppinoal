import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Navbar"));
const Footer = dynamic(() => import("../Footer"));
const Header = dynamic(() => import("../Header"));

const Layout = ({ children, SeoData, data, navServices , ourservices , navCat }) => {
  
  return (
    <>
      {SeoData && <Header data={SeoData}/>}
      <div className="flex flex-col justify-between ">
        <Navbar data={data?.header} navServices={navServices} ourservices={ourservices} navCat={navCat} />
        <div className="flex-1">{children}</div>
        <Footer data={data?.footer&&data.footer[0]}  ourservices={ourservices}/>
      </div>
    </>
  );
};

export default Layout;
