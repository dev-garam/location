import { removeIsland } from "../location/removeIsland";

const n = +(process.argv[2]|| "").replace(/(\s*)/g, "");
console.log("삭제된 갯수: ", removeIsland(Number.isNaN(n) || n === 0 ? 5 : n));