import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";

import { validate } from "./validate.ts";
import { sampleResponse } from "./validate.fixture.ts";
import debugSchema from "./schema-debug.ts";

Deno.test("validate errors", () => {
  const errors = validate("SchwabSyncResult", {}, debugSchema);
  assertEquals(errors, [
    'SchwabSyncResult with value {} requires property "BrokerageHistoryOut"',
    'SchwabSyncResult with value {} requires property "BrokerageHistoryIn"',
    'SchwabSyncResult with value {} requires property "TransactionTypes"',
  ]);
});

Deno.test("validate sample", () => {
  const errors = validate("SchwabSyncResult", sampleResponse, debugSchema);
  assertEquals(errors.slice(0, 1)[0], undefined);
});
