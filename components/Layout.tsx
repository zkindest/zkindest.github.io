import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import defaults from "@/config";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { title } = defaults;
  return (
    <React.Fragment>
      <Header siteTitle={title} />
      <main className="main">
        <div className="content-wrapper">{children}</div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
