import { globalStyle } from "@vanilla-extract/css";
import { reset } from "./layers.css";

const resetStyle = (selector, styles) => {
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

resetStyle("button", {
  font: "inherit",
  color: "inherit",
  background: "none",
  border: "none",
  cursor: "pointer",
});
