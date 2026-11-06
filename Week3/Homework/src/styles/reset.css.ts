import { globalStyle, type GlobalStyleRule } from "@vanilla-extract/css";
import { reset } from "./layer.css";

const resetStyle = (selector: string, styles: GlobalStyleRule) => {
  globalStyle(selector, { "@layer": { [reset]: styles } });
};

resetStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

resetStyle("html, body", {
  height: "100%",
});

resetStyle("ol, ul", {
  listStyle: "none",
});

resetStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

resetStyle("img", {
  display: "block",
  maxWidth: "100%",
});

resetStyle("button, input, select", {
  font: "inherit",
  color: "inherit",
});

resetStyle("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
});
