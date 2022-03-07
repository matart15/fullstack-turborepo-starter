/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, PasswordField } from "@aws-amplify/ui-react";
export default function ChangePassword(props) {
  const { onSubmit, onCancel, onValidate, onChange, overrides, ...rest } =
    props;
  const initialValues = {
    newPassword: undefined,
    confirmPassword: undefined,
  };
  const [newPassword, setNewPassword] = React.useState(
    initialValues.newPassword
  );
  const [confirmPassword, setConfirmPassword] = React.useState(
    initialValues.confirmPassword
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNewPassword(initialValues.newPassword);
    setConfirmPassword(initialValues.confirmPassword);
    setErrors({});
  };
  const validations = {
    newPassword: [{ type: "Required" }],
    confirmPassword: [{ type: "Required" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          newPassword,
          confirmPassword,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...rest}
      {...getOverrideProps(overrides, "ChangePassword")}
    >
      <PasswordField
        label="New password"
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              newPassword: value,
              confirmPassword,
            };
            const result = onChange(modelFields);
            value = result?.newPassword ?? value;
          }
          if (errors.newPassword?.hasError) {
            runValidationTasks("newPassword", value);
          }
          setNewPassword(value);
        }}
        onBlur={() => runValidationTasks("newPassword", newPassword)}
        errorMessage={errors.newPassword?.errorMessage}
        hasError={errors.newPassword?.hasError}
        {...getOverrideProps(overrides, "newPassword")}
      ></PasswordField>
      <PasswordField
        label="Confirm password"
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              newPassword,
              confirmPassword: value,
            };
            const result = onChange(modelFields);
            value = result?.confirmPassword ?? value;
          }
          if (errors.confirmPassword?.hasError) {
            runValidationTasks("confirmPassword", value);
          }
          setConfirmPassword(value);
        }}
        onBlur={() => runValidationTasks("confirmPassword", confirmPassword)}
        errorMessage={errors.confirmPassword?.errorMessage}
        hasError={errors.confirmPassword?.hasError}
        {...getOverrideProps(overrides, "confirmPassword")}
      ></PasswordField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
