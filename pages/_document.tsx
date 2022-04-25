import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { COLOR_MODE_KEY } from '@/constants/theme';
import Terser from 'terser';
import mem from 'mem';
import { Fragment } from 'react';

const minify = mem(Terser.minify);

function setColorsByTheme() {
  let colorMode = 'light';
  let colorModeKey = '🔑';
  const persistedColorPreference = window.localStorage.getItem(colorModeKey);

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';

  if (typeof persistedColorPreference == 'string') {
    colorMode = persistedColorPreference;
  } else {
    colorMode = hasMediaQueryPreference ? 'dark' : 'light';
  }

  let body = document.body;

  if (colorMode == 'dark') {
    body.classList.remove('light');
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme).replace('🔑', COLOR_MODE_KEY);

  let codeToRunOnClient = `(${boundFn})()`;

  const minifyOutput = minify(codeToRunOnClient);
  if (minifyOutput.error) {
    throw minifyOutput.error;
  }

  if (!minifyOutput.code) {
    throw new Error('Minified code is empty');
  }

  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{ __html: minifyOutput.code }}
    />
  );
};
export default class MyDocument extends Document {
  // we are interested in static static generation
  // so,👇(below function) will inject the server side(build time) rendered styles into the <head> to avoid distorted html intial loads
  // https://styled-components.com/docs/advanced#server-side-rendering
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          // see issue: https://github.com/vercel/next.js/issues/36008
          <Fragment key="1">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#90cdf4" />
          <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          />
        </Head>
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
