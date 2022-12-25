import { readData } from "../location/read";

(function () {
  const data = readData();
  if (data) {
    console.log("grid: ", data.grid);
    console.log("point cnt: ", (data.selectPoint || []).length);
    console.log("select point: ", data.selectPoint);
  } else {
    console.log("non-data");
  }
})();
