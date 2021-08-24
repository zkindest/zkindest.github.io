import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "@/constants/theme";
import Terser from "terser";
import mem from "mem";

const minify = mem(Terser.minify);

function setColorsByTheme() {
  let colorMode = "light";
  let colors = "🌈";
  let colorModeKey = "🔑";
  let colorModeCssProp = "⚡️";
  const persistedColorPreference = window.localStorage.getItem(colorModeKey);

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";

  if (typeof persistedColorPreference == "string") {
    colorMode = persistedColorPreference;
  } else {
    colorMode = hasMediaQueryPreference ? "dark" : "light";
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--clr-${name}`;
    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP);

  let codeToRunOnClient = `(${boundFn})()`;

  const minifyOutput = minify(codeToRunOnClient);
  if (minifyOutput.error) {
    throw minifyOutput.error;
  }

  if (!minifyOutput.code) {
    throw new Error("Minified code is empty");
  }

  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{ __html: minifyOutput.code }}
    />
  );
};
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
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
