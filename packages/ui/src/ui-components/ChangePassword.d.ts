/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, PasswordFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChangePasswordInputValues = {
    newPassword?: string;
    confirmPassword?: string;
};
export declare type ChangePasswordValidationValues = {
    newPassword?: ValidationFunction<string>;
    confirmPassword?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChangePasswordOverridesProps = {
    ChangePasswordGrid?: FormProps<GridProps>;
    newPassword?: FormProps<PasswordFieldProps>;
    confirmPassword?: FormProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type ChangePasswordProps = React.PropsWithChildren<{
    overrides?: ChangePasswordOverridesProps | undefined | null;
} & {
    onSubmit: (fields: ChangePasswordInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: ChangePasswordInputValues) => ChangePasswordInputValues;
    onValidate?: ChangePasswordValidationValues;
} & React.CSSProperties>;
export default function ChangePassword(props: ChangePasswordProps): React.ReactElement;
