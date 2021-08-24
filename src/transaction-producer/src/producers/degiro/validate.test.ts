import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";

import { validate } from "./validate.ts";
import { sampleResponse } from "./validate.fixture.ts";
import debugSchema from "./schema-debug.ts";

Deno.test("validate errors", () => {
  const errors = validate("DegiroSyncResult", {}, debugSchema);
  assertEquals(errors, [
    'DegiroSyncResult with value {} requires property "productDetails"',
    'DegiroSyncResult with value {} requires property "cashMovements"',
    'DegiroSyncResult with value {} requires property "accountInfo"',
    'DegiroSyncResult with value {} requires property "transactions"',
  ]);
});

Deno.test("validate sample", () => {
  const errors = validate("DegiroSyncResult", sampleResponse, debugSchema);
  assertEquals(errors.slice(0, 1)[0], undefined);
});
