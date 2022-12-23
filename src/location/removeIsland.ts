import { read, write } from "../init";
import { randomNumber } from "../utils/random";

/**
 *
 * @param n 삭제할 갯수
 * @returns 실제 삭제된 갯수
 */
function removeIsland(n: number) {
  const { grid, selectPoint = [] } = read();
  let data = {grid}
  let deleteCnt = 0;
  if (selectPoint.length > n) {
    while (n > deleteCnt) {
      let deleteIdx = randomNumber(0, selectPoint.length);
      selectPoint.splice(deleteIdx, 1);
      deleteCnt++;
    }
    write({ ...data, selectPoint });
  } else {
    write(data);
    deleteCnt = n;
  }
  return deleteCnt;
}

const n = +process.argv[2].replace(/(\s*)/g, "");
console.log("삭제된 갯수: ", removeIsland(Number.isNaN(n) ? 5 : n));
