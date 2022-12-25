import fs from "fs";
import path from "path";
import { randomNumber } from "./utils/random";

const filename = "data.json";
const filepath = path.join(__dirname, "../data", filename);

interface initData {
  min: number;
  max: number;
}


/**
 * @param initData = {min: 최소값, max: 최대값} 
 * @returns 
 */
export async function init({ min, max }: initData) {
  let m = randomNumber(min, max);
  let n = randomNumber(min, max);

  /**
   * 격자 생성코드, 최대 2(max - min) 개 생성
   * 격자 전체 코드를 저장하는 것 보다는, 선택된 좌표를 저장하는게 더 나을 것 같음
   */
  // let mMin = min;
  // let nMin = min;
  // while (true) {
  //   grid.push([mMin, nMin]);
  //   if (mMin >= m && nMin >= n) {
  //     break;
  //   }
  //   if (nMin === n) {
  //     mMin++;
  //     nMin = min;
  //   }
  //   nMin++;
  // }

  await write({ grid: { m, n, max, min } });
  console.log("grid init!: ", { grid: { m, n, max, min } });
  return { grid: { m, n, max, min } };
}

export async function write(data: object) {
  // 파일 저장, json 형식
  if (!fs.existsSync(filepath)) {
    // file 없을 경우 생성해주기
    fs.open(filepath, "w", (err) => {
      console.error("error1: ", err);
    });
  }
  fs.writeFileSync(filepath, JSON.stringify(data));
}

export function read() {
  const data = fs.readFileSync(filepath, "utf-8");
  if (typeof data === "string" && data.length > 0) return JSON.parse(data);
}

const [key, min = 2, max = 10000] = process.argv.slice(2);

key === "init" &&
  init({
    min: Number.isNaN(+min) ? 2 : +min,
    max: Number.isNaN(+max) ? 10000 : +max,
  });
