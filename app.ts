import { generateIsland } from "./src/location/generateIsland";

const n = +process.argv[2].replace(/(\s*)/g, "");
console.log("생성된 갯수: ", generateIsland(Number.isNaN(n) ? 5 : n));