import { BaseSchema, ValidationError } from 'yup';

const crypto = require('crypto');

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});

export const isValidationError = (e: unknown): e is ValidationError => {
  return e instanceof ValidationError;
};

export const expectValidationFail = async ({
  schema,
  value,
  errorMessage,
}: {
  schema: BaseSchema;
  value: any;
  errorMessage: string;
}): Promise<void> => {
  try {
    await schema.validate(value);
    throw new Error(`should not come here: ${JSON.stringify(value)}`);
  } catch (e: unknown) {
    if (isValidationError(e)) {
      expect(e.message).toBe(errorMessage);
      return;
    }
    throw e;
  }
};

export const expectValidationPass = async ({
  schema,
  value,
}: {
  schema: BaseSchema;
  value: any;
}): Promise<void> => {
  const s = await schema.validate(value);
  expect(s).toBe(value);
};
