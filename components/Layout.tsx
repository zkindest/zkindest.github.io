import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import defaults from "@/config";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { title } = defaults;
  return (
    <Container>
      <Header siteTitle={title} />
      <main className="main">
        <div className="content-wrapper">{children}</div>
      </main>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 0.5rem;

  main {
    min-height: 100vh;
  }
`;

export default Layout;
