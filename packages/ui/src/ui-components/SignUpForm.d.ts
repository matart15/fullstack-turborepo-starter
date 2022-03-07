/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SignUpFormInputValues = {
    email?: string;
    password?: string;
};
export declare type SignUpFormValidationValues = {
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpFormOverridesProps = {
    SignUpFormGrid?: FormProps<GridProps>;
    email?: FormProps<TextFieldProps>;
    password?: FormProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type SignUpFormProps = React.PropsWithChildren<{
    overrides?: SignUpFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: SignUpFormInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: SignUpFormInputValues) => SignUpFormInputValues;
    onValidate?: SignUpFormValidationValues;
} & React.CSSProperties>;
export default function SignUpForm(props: SignUpFormProps): React.ReactElement;
