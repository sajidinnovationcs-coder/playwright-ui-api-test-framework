import {
  storePlacePetOrder,
  storeGetOrder,
} from "../../../src/apiClients/petClient.js";
import { test, expect } from "@playwright/test";

let postBodyresult;
let getBody;
test.describe("smoke test pack", () => {
  test("should place a new pet order successfully", async () => {
    postBodyresult = await storePlacePetOrder();
    // console.log(postBodyresult);
    expect.soft(postBodyresult[0].status).toBe(200);
    expect.soft(postBodyresult[0].body.id).toBeDefined();
  });
});
