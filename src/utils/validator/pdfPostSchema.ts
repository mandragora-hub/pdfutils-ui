import { JSONSchemaType } from "ajv";

const pdfPostSchema: JSONSchemaType<{ fileUrl: string }> = {
  type: "object",
  properties: {
    fileUrl: { type: "string" },
  },
  required: ["fileUrl"],
  additionalProperties: false,
};

export default pdfPostSchema;
