import { read, write } from "../init";
import { randomNumber } from "../utils/random";

/**
 *
 * @param n 삭제할 갯수
 * @returns 실제 삭제된 갯수
 */
export async function removeIsland(n: number) {
  const { grid, selectPoint = [] } = read();
  let data = {grid}
  let deleteCnt = 0;
  if (selectPoint.length > n) {
    while (n > deleteCnt) {
      let deleteIdx = randomNumber(0, selectPoint.length);
      selectPoint.splice(deleteIdx, 1);
      deleteCnt++;
    }
    await write({ ...data, selectPoint });
  } else {
    await write(data);
    deleteCnt = selectPoint.length;
  }
  return deleteCnt;
}

