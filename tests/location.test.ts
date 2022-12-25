import { init } from "../src/init";
import { generateIsland } from "../src/location/generateIsland";
import { readData } from "../src/location/read";
import { removeIsland } from "../src/location/removeIsland";

describe("group test", () => {
  test("init test", async () => {
    const data = await init({ min: 1, max: 2000 });
    expect(!!data).toBe(true);
    expect(data?.grid?.m >= 2000 && data?.grid?.m <= 1).toBe(false);
    expect(data?.grid?.n >= 2000 && data?.grid?.n <= 1).toBe(false);
  });

  test("generateIsland 10", async () => {
    const returnData = await generateIsland(10);
    expect(returnData === 10).toBe(true);
  });

  test("generateIsland 5", async () => {
    const returnData = await generateIsland(5);
    expect(returnData === 5).toBe(true);
  });

  test("duplication check", () => {
    const { selectPoint = [] } = readData();
    const checkedData = new Set(selectPoint);
    expect(selectPoint.length === checkedData.size).toBe(true);
  });

  test("removeIsland 3", async () => {
    const returnData = await removeIsland(3);
    expect(returnData === 3).toBe(true);
  });

  test("removeIsland 20", async () => {
    const returnData = await removeIsland(20);
    expect(returnData === 12).toBe(true);
  });

  test("get data", () => {
    const data = readData();
    expect((data?.selectPoint || []).length === 0).toBe(true);
  });
});
