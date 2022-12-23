import { read, write } from "../init";
import { randomNumber } from "../utils/random";

/**
 *
 * @param num 선택할 갯수
 * @returns 실제 선택된 갯수
 */
function generateIsland(num: number) {
  const { grid, selectPoint = [] } = read();
  const { m, n, min } = grid;
  const newPointList: number[][] = [];
  let saveCnt = 0;

  while (num > saveCnt) {
    let newPoint: number[] = findPoint(selectPoint, min, m, n);
    newPointList.push(newPoint);
    saveCnt++;
  }

  const data = { grid, selectPoint: [...selectPoint, ...newPointList] };
  write(data);
  return saveCnt;
}

/**
 *
 * @param selectPoint 선택되어있는 좌표
 * @param min 격자 최소값
 * @param maxM 격자 중 M 최대값
 * @param maxN 격자 중 N 최대값
 * @returns 추가로 선택할 좌표
 */
function findPoint(
  selectPoint: number[][],
  min: number,
  maxM: number,
  maxN: number
): number[] {
  let m = randomNumber(min, maxM);
  let n = randomNumber(min, maxN);
  return !selectPoint.find((point) => point[0] === m && point[1] === n)
    ? [m, n]
    : findPoint(selectPoint, min, maxM, maxN);
}

const n = +process.argv[2].replace(/(\s*)/g, "");
console.log("생성된 갯수: ", generateIsland(Number.isNaN(n) ? 5 : n));
