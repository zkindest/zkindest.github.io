export const COLORS: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  text: {
    light: "#000",
    dark: "#eee",
  },
  background: {
    light: "#fff",
    dark: "hsl(210deg, 30%, 8%)",
  },
  "toggle-background": {
    light: "#87CEEB",
    dark: "#000",
  },
  "link-active": {
    dark: "#ccc",
    light: "#000"
  },
  "show-text": {
    dark: "#ddd",
    light: "rgb(74, 85, 104)"
  },
  "link": {
    dark: "lightsalmon",
    light: "darkorange"
  }
};
export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
