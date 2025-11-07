// CJS(Common JS 모듈 시스템)
// const { add, sub } = require("./math.js");

// ESM (ES 모듈 시스템)
import mul, { add, sub } from "./math.js";
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(1, 2));
