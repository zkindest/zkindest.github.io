import { Blockquote, Code, Headings, CodeBlock } from "@/components/Complete";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/lib/ThemeContext";
import { Components, MDXProvider } from "@mdx-js/react";
import App, { AppContext } from "next/app";
import React from "react";
import "../css/styles.css";

const components: Components = {
  h3: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: CodeBlock,
};

class MyApp extends App {
  static async getInitialProps(appContext: AppContext) {
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <MDXProvider components={components}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
