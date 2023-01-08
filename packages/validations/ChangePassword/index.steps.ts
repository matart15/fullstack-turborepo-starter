import { defineFeature, loadFeature } from 'jest-cucumber';
import { expectValidationFail, expectValidationPass } from '../testHelper';
import { schemaValidate } from '.';

const feature = loadFeature('./ChangePassword/index.feature');

let badInputs: any[] = [];
let goodInputs: any[] = [];

defineFeature(feature, test => {
  test('Bad inputs', ({ given, then }) => {
    given('some bad inputs', (table: any[]) => {
      badInputs = table;
    });
    given('some good inputs', (table: any[]) => {
      goodInputs = table;
    });

    then('errors should match', async () => {
      const badPromises: Promise<void>[] = [];
      const goodPromises: Promise<void>[] = [];
      badInputs.forEach((badInput: any) => {
        badPromises.push(
          expectValidationFail({
            schema: schemaValidate,
            value: badInput,
            errorMessage: badInput.errorMessage,
          }),
        );
      });
      goodInputs.forEach((goodInput: any) => {
        goodPromises.push(
          expectValidationPass({
            schema: schemaValidate,
            value: goodInput,
          }),
        );
      });
      try {
        await Promise.all(badPromises).catch();
        await Promise.all(goodPromises).catch();
      } catch (e) {
        throw new Error(`some bad thing happened ${(e as any).message}`);
      }
    });
  });
});
