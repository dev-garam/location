import { read } from "../init";

(function readData() {
  const data = read()
  console.log("grid: ",data.grid)
  console.log("point cnt: ", (data.selectPoint || []).length);
  console.log("select point: ", data.selectPoint)
})()
