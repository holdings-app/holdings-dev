import defaultSchema from "./schema.ts";
import { validate as JsonSchemaValidate } from "../../../deps.ts";

export const validate = (
  instanceNamespace: string,
  // deno-lint-ignore no-explicit-any
  syncResult: any,
  // deno-lint-ignore no-explicit-any
  schema: any = defaultSchema,
) => {
  const { errors = [] } = JsonSchemaValidate(syncResult, schema);
  return errors.map(({ message, property, instance }) =>
    `${property.replace("instance", instanceNamespace)} with value ${
      JSON.stringify(instance)
    } ${message}`
  );
};
